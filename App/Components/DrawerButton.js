// @flow
import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Connect } from '../Redux';
import styles from './Styles/DrawerButtonStyle';
import { Metrics } from '../Themes';

class DrawerButton extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    active: PropTypes.string,
  }

  navigateTo = page => () => {
    this.props.actions.setActivePage(page);
    NavigationActions[page]();
    this.props.actions.closeDrawer();
  }

  render() {
    const { text, active, page } = this.props;

    const isActive = active === page;
    const containerStyle = [styles.btnDrawer, isActive ? styles.btnDrawerActive : null];
    const textStyle = [styles.btnDrawerText, isActive ? styles.btnDrawerTextActive : null];
    const iconStyle = [styles.btnDrawerIcon, isActive ? styles.btnDrawerIconActive : null];

    return (
      <TouchableOpacity style={containerStyle} onPress={this.navigateTo(page)} >
        <Text style={textStyle}>{text}</Text>
        <Icon name="keyboard-arrow-right"
          size={Metrics.icons.medium}
          style={iconStyle} />
      </TouchableOpacity>
    );
  }

}

export default Connect(DrawerButton);
