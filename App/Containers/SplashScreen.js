import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

class SplashScreen extends Component {

  componentDidUpdate() {
    const { joined } = this.props;
    const { onboardingComplete } = this.props.profile;
    if (joined) {
      NavigationActions.drinkUp();
    } else if (onboardingComplete) {
      NavigationActions.map();
    } else {
      NavigationActions.onboard();
    }
  }

  render() {
    return (
      <View></View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile,
  joined: state.drinkup.joined,
});

// eslint-disable-next-line
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
