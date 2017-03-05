import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import styles from '../Styles/BarScreenStyle';
import DrinkUpLobby from './DrinkUpLobbyScreen';
import ItsJustMe from './ItsJustMeScreen';
import DrinkupActions from '../../Redux/DrinkupRedux';
import DirectionsDialog from '../../Components/Dialogs/DirectionsDialog';

class DrinkUp extends Component {

  static propTypes = {
    barId: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      isDirectionDialogShowing: false,
    };
  }

  componentDidMount() {
    const barId = this.props.barId ? this.props.barId : this.props.bar.id;
    this.props.getBar(barId);
    this.props.getMembers(barId);
    if (this.props.bar) {
      NavigationActions.refresh({
        title: this.props.bar.name,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.bar.id !== prevProps.bar.id) {
      this.props.getMembers(this.props.barId);
      NavigationActions.refresh({
        title: this.props.bar.name,
      });
    }
  }

  showDirectionDialog = () => {
    this.setState({ isDirectionDialogShowing: true });
  }

  closeDirectionDialog = () => {
    this.setState({ isDirectionDialogShowing: false });
  }

  renderScreen() {
    if (this.props.members.length > 1) {
      return <DrinkUpLobby />;
    }
    return <ItsJustMe />;
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
    return (
      <View style={styles.contentContainer}>
        {this.renderScreen()}
        {this.renderDirectionDialog()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  members: state.drinkup.members,
  bar: state.drinkup.bar,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
  getBar: barId => dispatch(DrinkupActions.barRequest(barId)),
  getMembers: barId => dispatch(DrinkupActions.membersRequest(barId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkUp);
