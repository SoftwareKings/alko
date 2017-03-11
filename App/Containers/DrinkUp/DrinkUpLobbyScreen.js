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

import styles from '../Styles/DrinkupScreenStyle';
import Button from '../../Components/Button';
import Dialog from '../../Components/Dialog';
import AlkoSpecialWarningDialog from '../../Components/Dialogs/AlkoSpecialWarningDialog';
import JoinDialog from '../../Components/Dialogs/JoinDialog';
import ComposeMessageDialog from '../../Components/Dialogs/ComposeMessageDialog';
import Banner from '../../Components/Banner';
import Avatar from '../../Components/Avatar';
import { Metrics } from '../../Themes';
import DrinkupActions from '../../Redux/DrinkupRedux';
import { requestingMember } from '../../Fixtures/drinkupMembers';

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
      joiningMember: requestingMember,
      showRedeemWarning: false,
      showComposeMessage: false,
      composedMessage: '',
    };
    this.onCloseJoiningDialog = this.onCloseJoiningDialog.bind(this);
    this.onCloseRedeemWarningDialog = this.onCloseRedeemWarningDialog.bind(this);
    this.onCloseComposeMessageDialog = this.onCloseComposeMessageDialog.bind(this);
    this.onAcceptRedeemWarning = this.onAcceptRedeemWarning.bind(this);
    this.onComposedMessageChange = this.onComposedMessageChange.bind(this);
  }

  componentDidUpdate() {
    if (!this.props.joined) {
      NavigationActions.map();
    }
  }

  onShowMessage = (member) => {
    this.setState({ member });
  }

  onCloseMessage = () => {
    this.setState({ member: null });
  }

  onRedeem = () => {
    // Draft only
    const firstTime = true;
    if (firstTime) {
      this.setState({ showRedeemWarning: true });
    } else {
      this.redeem();
    }
  }

  onLeave = () => {
    this.props.leaveDrinkup(requestingMember);
    this.setState({ waiting: false });
  }

  onCloseJoiningDialog() {
    this.setState({ joiningMember: null });
    this.setState({ showComposeMessage: true });
  }

  onCloseRedeemWarningDialog() {
    this.setState({ showRedeemWarning: false });
  }

  onCloseComposeMessageDialog() {
    this.setState({ showComposeMessage: false });
  }

  onAcceptRedeemWarning() {
    this.setState({ showRedeemWarning: false });
    this.redeem();
  }

  onComposedMessageChange(message) {
    this.setState({ composedMessage: message });
  }

  redeem() {
    NavigationActions.redeem2for1Screen({
      bar: this.props.bar.name,
      redeemDate: moment(),
      expiryDate: moment().add(3, 'minutes'),
    });
  }

  renderRedeemWarningDialog() {
    return (
      <AlkoSpecialWarningDialog
        onButtonPress={this.onAcceptRedeemWarning}
        onClose={this.onCloseRedeemWarningDialog}
        visible={this.state.showRedeemWarning}
      />
    );
  }

  renderComposeMessageDialog() {
    return (
      <ComposeMessageDialog
        message={this.state.composedMessage}
        messagePlaceholder={`How will ${requestingMember.name} find you?`}
        onChangeMessage={this.onComposedMessageChange}
        onClose={this.onCloseComposeMessageDialog}
        visible={this.state.showComposeMessage}
      />
    );
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
    const { members, column, columnPadding, bar } = this.props;
    const twoForOne = bar.promotions.includes('twoForOne');
    // eslint-disable-next-line no-mixed-operators
    const avatarWidth = (width - Metrics.doubleBaseMargin * 2) / column - columnPadding * 2;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={[styles.mainContainer, styles.container]}>
        {
          twoForOne ?
            <Banner onPress={this.onRedeem} theme="info" text={I18n.t('Drinkup_ClickToGet2For1ALKOSpecial')} />
          : null
        }
        <ListView
          enableEmptySections
          contentContainerStyle={styles.list}
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
        {this.renderRedeemWarningDialog()}
        {this.renderComposeMessageDialog()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  bar: state.drinkup.bar,
  joined: state.drinkup.joined,
  members: state.drinkup.members,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
  leaveDrinkup: member => dispatch(DrinkupActions.leaveDrinkup(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkupLobbyScreen);
