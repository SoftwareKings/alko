import React, { Component, PropTypes } from 'react';
import {
  View,
  Dimensions,
  ListView,
  Text,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';
import I18n from 'react-native-i18n';
import { Actions as NavigationActions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../Styles/DrinkupScreenStyle';
import Button from '../../Components/Button';
import Banner from '../../Components/Banner';
import Avatar from '../../Components/Avatar';
import Dialog from '../../Components/Dialog';
import DirectionsDialog from '../../Components/Dialogs/DirectionsDialog';
import DrinkupActions from '../../Redux/DrinkupRedux';
import { Icons, Metrics, Colors, Images } from '../../Themes';

const { width } = Dimensions.get('window');

/* Sample Data */
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
    arrived: true,
  },
  {
    name: 'Danny',
    avatar: Images.sampleAvatar,
    message: 'Hey! I\'m Danny and nice to meet you.',
    arrived: true,
  },
  {
    name: 'Joshua',
    avatar: Images.sampleAvatar,
    arrived: true,
  },
  {
    name: 'Jarod',
    avatar: Images.sampleAvatar,
    arrived: true,
  },
  {
    name: 'Maggie',
    avatar: Images.sampleAvatar,
    arrived: true,
  },
  {
    name: 'Kenny',
    avatar: Images.sampleAvatar,
    arrived: false,
  },
];

const requestingMember = {
  name: 'Abby',
  avatar: Images.sampleAvatar,
  distance: '0.4mi away',
};


/* Start for component */
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
      isDirectionDialogShowing: false,
      member: null,
      joiningMember: requestingMember, // only use for demo
    };
  }

  componentWillMount() {
    NavigationActions.refresh({
      renderRightButton: () => { // eslint-disable-line arrow-body-style
        return (
          <TouchableOpacity onPress={this.showDirectionDialog}>
            <Icon name="map" size={Metrics.icons.medium} color={Colors.snow} />
          </TouchableOpacity>
        );
      },
    });
  }

  componentDidMount() {
    this.props.joinDrinkup(false, unjoinedMembersData);
  }

  /*
  * these functions for waiting state
  */
  onWaiting = () => {
    this.setState({ waiting: true });
  }

  onCancel = () => {
    this.setState({ waiting: false });
  }

  // this function is only use for demo
  onDraftJoined = () => {
    this.props.joinDrinkup(true, joinedMembersData);
  }

  /*
  * these functions for joined state
  */
  onShowMessage = (member) => {
    this.setState({ member });
  }

  onCloseMessage = () => {
    this.setState({ member: null });
  }

  onRedeem = () => {
    NavigationActions.redeem2for1Screen({
      bar: 'Bohemian Biergarten',
      redeemDate: moment(),
      expiryDate: moment().add(3, 'minutes'),
    });
  }

  onLeave = () => {
    this.props.joinDrinkup(false, unjoinedMembersData);
    this.setState({ waiting: false });
  }

  /*
  * these functions for requesting state
  */
  onCloseJoiningDialog = () => {
    this.setState({ joiningMember: null });
  }

  showDirectionDialog = () => {
    this.setState({ isDirectionDialogShowing: true });
  }

  closeDirectionDialog = () => {
    this.setState({ isDirectionDialogShowing: false });
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
        {this.renderDirectionDialog()}
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
              <Avatar
                image={member.avatar}
                width={avatarWidth}
                name={member.name}
                message={member.message}
                onPressMessage={this.onShowMessage}
                disabled={!member.arrived}
              />
            </View>
          } />
        <Button onPress={this.onLeave} theme={'disallow'} text={I18n.t('Drinkup_LeaveTheDrinkUp')} />
        {this.renderMessageDialog()}
        {this.renderRequestToJoinDialog()}
        {this.renderDirectionDialog()}
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
        <Text style={styles.name}>{member.name} {I18n.t('Drinkup_Says')}</Text>
        <Text style={styles.message}>{member.message}</Text>
        <Button onPress={this.onCloseMessage} text={I18n.t('close')} />
      </Dialog>
    );
  }

  renderRequestToJoinDialog() {
    const { joiningMember } = this.state;
    if (!joiningMember) {
      return null;
    }
    return (
      <Dialog
        subcontent={
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.reportText}>{I18n.t('report')} {joiningMember.name.toLowerCase()}</Text>
            </TouchableOpacity>
          </View>
        }
        visible
      >
        <Text style={styles.title}>{joiningMember.name} {I18n.t('Drinkup_WantToJoin')}</Text>
        <Avatar
          style={styles.joiningAvatar}
          image={joiningMember.avatar}
          imageStyle={styles.joiningAvatarImage}
          width={128}
        />
        <Text style={styles.joiningDistance}>{joiningMember.distance}</Text>
        <Button onPress={this.onCloseJoiningDialog} text={I18n.t('Drinkup_SendInvite')} />
      </Dialog>
    );
  }

  renderDirectionDialog() {
    return (
      <DirectionsDialog
        onClose={this.closeDirectionDialog}
        onGoogleMapsPress={this.closeDirectionDialog}
        onAppleMapsPress={this.closeDirectionDialog}
        visible={this.state.isDirectionDialogShowing}
      />
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
