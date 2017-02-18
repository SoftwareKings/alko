import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './Styles/MainScreenStyle';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>MainScreen</Text>
      </View>
    );
  }

}
