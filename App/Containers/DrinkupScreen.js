import React, { Component, PropTypes } from 'react';
import {
  View,
  Dimensions,
  ListView,
  Text,
  TouchableOpacity,
} from 'react-native';

import I18n from 'react-native-i18n';
import { Actions as NavigationActions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import styles from './Styles/DrinkupScreenStyle';
import Button from '../Components/Button';
import Banner from '../Components/Banner';
import Avatar from '../Components/Avatar';
import Dialog from '../Components/Dialog';
import DrinkupActions from '../Redux/DrinkupRedux';
import { Icons, Metrics, Images } from '../Themes';

const { width } = Dimensions.get('window');

const unjoinedMembersData = [
  {
    icon: Icons.martini,
    name: 'Abby',
  },
  {
    icon: Icons.beer,
    name: 'Danny',
  },
  {
    icon: Icons.highball,
    name: 'Joshua',
  },
  {
    icon: Icons.margarita,
    name: 'Jarod',
  },
  {
    icon: Icons.tumbler,
    name: 'Maggie',
  },
];

const joinedMembersData = [
  {
    name: 'Abby',
    avatar: Images.sampleAvatar,
    message: 'Hey! we\'re at the bar, near the kitchen! I\'m wearing a purple shirt and jeans.',
  },
  {
    name: 'Danny',
    avatar: Images.sampleAvatar,
    message: 'Hey! we\'re at the bar, near the kitchen! I\'m wearing a purple shirt and jeans.',
  },
  {
    name: 'Joshua',
    avatar: Images.sampleAvatar,
  },
  {
    name: 'Jarod',
    avatar: Images.sampleAvatar,
  },
  {
    name: 'Maggie',
    avatar: Images.sampleAvatar,
  },
];

@connect(
  state => ({
    joined: state.drinkup.joined,
    members: state.drinkup.members,
  }),
  {
    joinDrinkup: DrinkupActions.joinDrinkup,
  }
)
export default class DrinkupScreen extends Component {

  static propTypes = {
    members: PropTypes.array,
    column: PropTypes.number,
    columnPadding: PropTypes.number,
    joined: PropTypes.bool,
    joinDrinkup: PropTypes.func,
  }

  static defaultProps = {
    column: 3,
    columnPadding: 15,
  }

  constructor(...props) {
    super(...props);
    this.state = {
      waiting: false,
      member: null,
    };
  }

  componentDidMount() {
    this.props.joinDrinkup(false, unjoinedMembersData);
  }

  onWaiting = () => {
    this.setState({ waiting: true });
  }

  onCancel = () => {
    this.setState({ waiting: false });
  }

  onRedeem = () => {
    NavigationActions.redeem2for1Screen();
  }

  // this function is only use for demo
  onDraftJoined = () => {
    this.props.joinDrinkup(true, joinedMembersData);
  }

  onShowMessage = (member) => {
    this.setState({ member });
  }

  onCloseMessage = () => {
    this.setState({ member: null });
  }

  onLeave = () => {
    this.props.joinDrinkup(false, unjoinedMembersData);
    this.setState({ waiting: false });
  }

  renderWaiting() {
    const { members, column, columnPadding } = this.props;
    const { waiting } = this.state;
    // eslint-disable-next-line no-mixed-operators
    const avatarWidth = (width - Metrics.doubleBaseMargin * 2) / column - columnPadding * 2;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={[styles.mainContainer, styles.container]}>
        <Banner theme="info" text={I18n.t('Drinkup_JoinDrinkUpAndGet2For1Drinks')} onPress={this.onWaiting} />
        <ListView contentContainerStyle={styles.list}
          dataSource={ds.cloneWithRows(members)}
          renderRow={member =>
            <View style={[styles.memberContainer, { padding: columnPadding }]}>
              <Avatar icon={member.icon} width={avatarWidth}
                name={member.name} />
            </View>
          } />
        {
          waiting ?
            <View>
              <Animatable.View animation="fadeIn" delay={1000} duration={500}>
                <Button theme={'disallow'} onPress={this.onCancel} text={I18n.t('Drinkup_CancelRequest')} />
              </Animatable.View>
              <TouchableOpacity onPress={this.onDraftJoined}>
                <Text style={styles.waitingInviteText}>{I18n.t('Drinkup_WaitingInvite')}</Text>
              </TouchableOpacity>
            </View>
            : <Button onPress={this.onWaiting} text={I18n.t('Drinkup_JoinDrinkUp')} />
        }
      </View>
    );
  }

  renderJoined() {
    const { members, column, columnPadding } = this.props;
    // eslint-disable-next-line no-mixed-operators
    const avatarWidth = (width - Metrics.doubleBaseMargin * 2) / column - columnPadding * 2;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={[styles.mainContainer, styles.container]}>
        <Banner onPress={this.onRedeem} theme="info" text={I18n.t('Drinkup_ClickToGet2For1ALKOSpecial')} />
        <ListView contentContainerStyle={styles.list}
          dataSource={ds.cloneWithRows(members)}
          renderRow={member =>
            <View style={[styles.memberContainer, { padding: columnPadding }]}>
              <Avatar image={member.avatar} width={avatarWidth}
                name={member.name} message={member.message} onPressMessage={this.onShowMessage} />
            </View>
          } />
        <Button onPress={this.onLeave} theme={'disallow'} text={I18n.t('Drinkup_LeaveTheDrinkUp')} />
        {this.renderMessageDialog()}
      </View>
    );
  }

  renderMessageDialog() {
    const { member } = this.state;
    if (!member) {
      return null;
    }
    return (
      <Dialog visible>
        <Text style={styles.name}>{member.name} says...</Text>
        <Text style={styles.message}>{member.message}</Text>
        <Button onPress={this.onCloseMessage} text={I18n.t('close')} />
      </Dialog>
    );
  }

  render() {
    const { joined, members } = this.props;
    if (!members) {
      return <View />;
    }

    if (joined) {
      return this.renderJoined();
    }
    return this.renderWaiting();
  }
}
