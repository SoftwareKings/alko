import React, { Component, PropTypes } from 'react';
import {
  View,
  ListView,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { Actions as NavigationActions } from 'react-native-router-flux';

import styles from '../Styles/DrinkupScreenStyle';
import Button from '../../Components/Button';
import Banner from '../../Components/Banner';
import Avatar from '../../Components/Avatar';
import { Metrics } from '../../Themes';
import DrinkupActions from '../../Redux/DrinkupRedux';
import { requestingMember } from '../../Fixtures/drinkupMembers';

const { width } = Dimensions.get('window');

class WaitingScreen extends Component {

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

  componentDidUpdate() {
    if (this.props.joined) {
      NavigationActions.drinkUp({ barId: this.props.bar.id });
    }
  }

  // this function is only use for demo
  onDraftJoined = () => {
    this.props.joinDrinkup(requestingMember);
  }

  onWaiting = () => {
    this.setState({ waiting: true });
  }

  onCancel = () => {
    this.setState({ waiting: false });
  }

  render() {
    const { members, column, columnPadding, bar } = this.props;
    const { waiting } = this.state;
    const twoForOne = bar.promotions.includes('twoForOne');
    // eslint-disable-next-line no-mixed-operators
    const avatarWidth = (width - Metrics.doubleBaseMargin * 2) / column - columnPadding * 2;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={[styles.mainContainer, styles.container]}>
        {
          twoForOne ?
            <Banner theme="info" text={I18n.t('Drinkup_JoinDrinkUpAndGet2For1Drinks')} onPress={this.onWaiting} />
            : null
        }
        <ListView
          enableEmptySections
          contentContainerStyle={styles.list}
          dataSource={ds.cloneWithRows(members)}
          renderRow={member =>
            <View style={[styles.memberContainer, { padding: columnPadding }]}>
              <Avatar icon={member.icon} width={avatarWidth} disabled={!member.arrived} name={member.name} />
            </View>
          }
        />
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
}

const mapStateToProps = state => ({
  joined: state.drinkup.joined,
  members: state.drinkup.members,
  bar: state.drinkup.bar,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
  joinDrinkup: member => dispatch(DrinkupActions.joinDrinkup(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitingScreen);
