// @flow

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import IconAlko from '../Components/IconAlko';
import styles from './Styles/NavItemsStyle';
import { Colors } from '../Themes';


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
          size={35}
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
          size={35}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    );
  },

  brandTitle() {
    return (
      <IconAlko name="alko" size={20} color={Colors.snow} />
    );
  },

  searchButton(callback: Function) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name="search"
          size={35}
          color={Colors.snow}
          style={styles.searchButton}
        />
      </TouchableOpacity>
    );
  },

};
