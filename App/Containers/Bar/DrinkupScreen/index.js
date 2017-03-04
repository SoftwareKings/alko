import React, { Component } from 'react';

import { connect } from 'react-redux';

import DrinkupLobbyScreen from './DrinkupLobbyScreen';
import WaitingScreen from './WaitingScreen';


class DrinkupScreen extends Component {
  render() {
    if (this.props.joined) {
      return <DrinkupLobbyScreen />;
    }
    return <WaitingScreen />;
  }
}

const mapStateToProps = state => ({
  joined: state.drinkup.joined,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkupScreen);
