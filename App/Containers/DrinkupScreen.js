import React, { Component, PropTypes } from 'react';
import {
  View,
  Dimensions,
  ListView,
  Text,
} from 'react-native';

import I18n from 'react-native-i18n';
import { Actions as NavigationActions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import styles from './Styles/DrinkupScreenStyle';
import Button from '../Components/Button';
import Banner from '../Components/Banner';
import Avatar from '../Components/Avatar';
import { Icons, Metrics, Images } from '../Themes';

const { width } = Dimensions.get('window');
export default class DrinkupScreen extends Component {

  static propTypes = {
    members: PropTypes.array,
    column: PropTypes.number,
    columnPadding: PropTypes.number,
    joined: PropTypes.bool,
  }

  static defaultProps = {
    members: [ // you can pass image property to show avatar with image, if user has avatar
      {
        icon: Icons.martini, // use for not yet joined
        name: 'Abby',
        avatar: Images.sampleAvatar,
        message: 'Hey! we\'re at the bar, near the kitchen! I\'m wearing a purple shirt and jeans.',
      },
      {
        icon: Icons.beer, // use for not yet joined
        name: 'Danny',
        avatar: Images.sampleAvatar,
      },
      {
        icon: Icons.highball, // use for not yet joined
        name: 'Joshua',
        avatar: Images.sampleAvatar,
      },
      {
        icon: Icons.margarita, // use for not yet joined
        name: 'Jarod',
        avatar: Images.sampleAvatar,
      },
      {
        icon: Icons.tumbler, // use for not yet joined
        name: 'Maggie',
        avatar: Images.sampleAvatar,
      },
    ],
    column: 3,
    columnPadding: 15,
    joined: true,
  }

  constructor(...props) {
    super(...props);
    this.state = {
      waiting: false,
    };
  }

  onWaiting = () => {
    this.setState({ waiting: true });
  }

  onCancel = () => {
    this.setState({ waiting: false });
  }

  onMessage = (member) => {
    // show dialog at here, need to merge dialog branch
    console.log(member);
  }

  onRedeem = () => {
    NavigationActions.redeem2for1Screen();
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
              <Text style={styles.waitingInviteText}>{I18n.t('Drinkup_WaitingInvite')}</Text>
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
                name={member.name} message={member.message} />
            </View>
          } />
        <Button theme={'disallow'} text={I18n.t('Drinkup_LeaveTheDrinkUp')} />
      </View>
    );
  }

  render() {
    const { joined } = this.props;
    if (joined) {
      return this.renderJoined();
    }
    return this.renderWaiting();
  }

}
