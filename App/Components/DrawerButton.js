// @flow
import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
// import { Actions as NavigationActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Styles/DrawerButtonStyle';
import { Metrics } from '../Themes';

class DrawerButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    isActive: PropTypes.bool,
  }

  render() {
    const { text, isActive, onPress } = this.props;
    const containerStyle = [styles.btnDrawer, isActive ? styles.btnDrawerActive : null];
    const textStyle = [styles.btnDrawerText, isActive ? styles.btnDrawerTextActive : null];
    const iconStyle = [styles.btnDrawerIcon, isActive ? styles.btnDrawerIconActive : null];

    return (
      <TouchableOpacity style={containerStyle} onPress={onPress} >
        <Text style={textStyle}>{text}</Text>
        <Icon name="keyboard-arrow-right"
          size={Metrics.icons.medium}
          style={iconStyle} />
      </TouchableOpacity>
    );
  }
}

export default DrawerButton;
