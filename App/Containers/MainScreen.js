import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';

import styles from './Styles/MainScreenStyle';
import Button from '../Components/Button';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>MainScreen</Text>
        <Button onPress={NavigationActions.license} text={'Test Another NavBar Style'} />
      </View>
    );
  }

}
