import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';

import styles from '../Styles/BarScreenStyle';
import DrinkUpScreen from './DrinkupScreen';
import NoDrinkUp from './NoDrinkUpScreen';
import ItsJustMe from './ItsJustMeScreen';
import NavItems from '../../Navigation/NavItems';
import DirectionsDialog from '../../Components/Dialogs/DirectionsDialog';

export default class extends Component {

  static renderScreen(config) {
    if (config.drinkUp) {
      if (config.itsJustMe) {
        return <ItsJustMe {...config} />;
      }
      return <DrinkUpScreen />;
    }

    return <NoDrinkUp {...config} />;
  }

  constructor(props) {
    super(props);
    this.state = {
      isDirectionDialogShowing: false,
    };
  }

  componentDidMount() {
    NavigationActions.refresh({
      renderRightButton: NavItems.mapButton(this.showDirectionDialog),
    });
  }

  showDirectionDialog = () => {
    this.setState({ isDirectionDialogShowing: true });
  }

  closeDirectionDialog = () => {
    this.setState({ isDirectionDialogShowing: false });
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
      drinkUp: true,
      twoForOne: false,
      itsJustMe: false, // Only relevant if drinkUp === true
    };

    return (
      <View style={styles.contentContainer}>
        {this.constructor.renderScreen(config)}
        {this.renderDirectionDialog()}
      </View>
    );

  }

}
