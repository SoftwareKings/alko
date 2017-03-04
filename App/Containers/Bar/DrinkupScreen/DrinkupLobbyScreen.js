import React, { Component, PropTypes } from 'react';
import {
  View,
  ListView,
  Dimensions,
  Text,
} from 'react-native';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';
import moment from 'moment';

import styles from '../../Styles/DrinkupScreenStyle';
import Button from '../../../Components/Button';
import Dialog from '../../../Components/Dialog';
import JoinDialog from '../../../Components/Dialogs/JoinDialog';
import Banner from '../../../Components/Banner';
import Avatar from '../../../Components/Avatar';
import { Metrics } from '../../../Themes';
import { unjoinedMembersData } from '../../../Fixtures/drinkupMembers';
import DrinkupActions from '../../../Redux/DrinkupRedux';

const { width } = Dimensions.get('window');

class DrinkupLobbyScreen extends Component {

  static propTypes = {
    members: PropTypes.array,
    column: PropTypes.number,
    columnPadding: PropTypes.number,
    joined: PropTypes.bool,
  }

  static defaultProps = {
    column: 3,
    columnPadding: 15,
  }

  constructor(...props) {
    super(...props);
    this.state = {
      member: null,
    };
  }

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

  renderMessageDialog() {
    const { member } = this.state;
    if (!member) {
      return null;
    }
    return (
      <Dialog closeButton closeOnBackdropPress onClose={this.onCloseMessage} visible>
        <Text style={styles.name}>{member.name} {I18n.t('Drinkup_Says')}</Text>
        <Text style={styles.message}>{member.message}</Text>
      </Dialog>
    );
  }

  renderRequestToJoinDialog() {
    if (this.state.joiningMember) {
      const { name, distance, avatar } = this.state.joiningMember;
      return (
        <JoinDialog
          onClose={this.onCloseJoiningDialog}
          visible
          name={name}
          avatarSrc={avatar}
          distance={distance}
        />
      );
    }

    return null;
  }

  render() {
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
                messagesRead={member.messagesRead}
                onPress={member.message ? this.onShowMessage : null}
                disabled={!member.arrived}
              />
            </View>
          } />
        <Button onPress={this.onLeave} theme={'disallow'} text={I18n.t('Drinkup_LeaveTheDrinkUp')} />
        {this.renderMessageDialog()}
        {this.renderRequestToJoinDialog()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  joined: state.drinkup.joined,
  members: state.drinkup.members,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
  joinDrinkup: (joined, members) => dispatch(DrinkupActions.joinDrinkup(joined, members)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkupLobbyScreen);
