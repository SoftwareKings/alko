// @flow

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import IconAlko from '../Components/IconAlko';
import styles from './Styles/NavItemsStyle';
import { Colors } from '../Themes';

export default {
  backButton() {
    return (
      <TouchableOpacity onPress={NavigationActions.pop} style={styles.backButton}>
        <Icon name="angle-left"
          size={35}
          color={Colors.snow}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    );
  },

  hamburgerButton(onPress: Function) {
    return () => (
      <TouchableOpacity onPress={onPress} style={styles.navButtonLeft}>
        <IconAlko name="sidebar_toggle" size={20} color={Colors.snow} />
      </TouchableOpacity>
    );
  },

  mapButton(onPress: Function) {
    return () => (
      <TouchableOpacity onPress={onPress} style={styles.navButtonRight}>
        <IconAlko name="map" size={20} color={Colors.snow} style={styles.icon} />
      </TouchableOpacity>
    );
  },

  brandTitle() {
    return (
      <IconAlko name="alko" size={20} color={Colors.snow} />
    );
  },

};
