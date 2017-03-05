// @flow
import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Styles/DrawerButtonStyle';
import { Metrics } from '../Themes';

export default class DrawerButton extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
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
          style={iconStyle}
        />
      </TouchableOpacity>
    );
  }

}
