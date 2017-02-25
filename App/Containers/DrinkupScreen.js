import React, { Component, PropTypes } from 'react';
import {
  View,
  Dimensions,
  ListView,
  Text,
} from 'react-native';

import I18n from 'react-native-i18n';
import * as Animatable from 'react-native-animatable';
import styles from './Styles/DrinkupScreenStyle';
import Button from '../Components/Button';
import Banner from '../Components/Banner';
import Avatar from '../Components/Avatar';
import { Icons, Metrics } from '../Themes';

const { width } = Dimensions.get('window');
export default class DrinkupScreen extends Component {

  static propTypes = {
    members: PropTypes.array,
    column: PropTypes.number,
    columnPadding: PropTypes.number,
  }

  static defaultProps = {
    members: [ // you can pass image property to show avatar with image, if user has avatar
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
    ],
    column: 3,
    columnPadding: 15,
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

  render() {
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

}
