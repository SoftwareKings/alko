import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import NavItems from '../../Navigation/NavItems';
import styles from '../Styles/BarScreenStyle';
import WaitingScreen from './WaitingScreen';
import NoDrinkUp from './NoDrinkUpScreen';
import DirectionsDialog from '../../Components/Dialogs/DirectionsDialog';
import DrinkupActions from '../../Redux/DrinkupRedux';

class JoinDrinkUp extends Component {

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
    this.props.getBar(this.props.barId);
    if (this.props.bar) {
      NavigationActions.refresh({
        title: this.props.bar.name,
        renderRightButton: NavItems.mapButton(this.showDirectionDialog),
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.bar || this.props.bar.id !== prevProps.bar.id) {
      this.props.getMembers(this.props.barId);
      NavigationActions.refresh({
        title: this.props.bar.name,
        renderRightButton: NavItems.mapButton(this.showDirectionDialog),
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
    if (this.props.bar) {
      if (this.props.bar.activeDrinkUp) {
        return <WaitingScreen />;
      }

      const twoForOne = this.props.bar.promotions.includes('twoForOne');
      return <NoDrinkUp twoForOne={twoForOne} />;
    }

    return null;
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
    const config = {
      drinkUp: false,
      twoForOne: true,
    };

    return (
      <View style={styles.contentContainer}>
        {this.renderScreen(config)}
        {this.renderDirectionDialog()}
      </View>
    );

  }
}

const mapStateToProps = state => ({
  bar: state.drinkup.bar,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
  getBar: barId => dispatch(DrinkupActions.barRequest(barId)),
  getMembers: barId => dispatch(DrinkupActions.membersRequest(barId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(JoinDrinkUp);
