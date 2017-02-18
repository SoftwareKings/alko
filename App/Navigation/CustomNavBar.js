import React from 'react';
import { View, Text, Animated, Platform } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import Styles from './Styles/CustomNavBarStyle';

export default class CustomNavBar extends React.Component {

  renderLeftButton() {
    if (this.props.renderLeftButton) {
      return this.props.renderLeftButton();
    }
    return null;
  }

  renderRightButton() {
    if (this.props.renderRightButton) {
      return this.props.renderRightButton();
    }
    return null;
  }

  render() {
    return (
      <Animated.View style={[Styles.container, this.props.navigationBarStyle]}>
        <View style={Styles.buttonContainer}>
          {this.renderLeftButton()}
        </View>
        <Text style={[Styles.title, this.props.titleStyle]}>{this.props.title}</Text>
        <View style={Styles.buttonContainer}>
          {this.renderRightButton()}
        </View>
      </Animated.View>
    );
  }
}
