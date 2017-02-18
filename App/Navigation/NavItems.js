// @flow

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import styles from './Styles/NavItemsStyle';
import { Colors, Metrics } from '../Themes';

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true,
  });
};

export default {
  backButton() {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name="angle-left"
          size={Metrics.icons.large}
          color={Colors.snow}
          style={styles.backButton}
        />
      </TouchableOpacity>
    );
  },

  hamburgerButton() {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <IconMaterial name="sort"
          size={Metrics.navBarLeftBtnIcon}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    );
  },

  searchButton(callback: Function) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name="search"
          size={Metrics.icons.small}
          color={Colors.snow}
          style={styles.searchButton}
        />
      </TouchableOpacity>
    );
  },

};
