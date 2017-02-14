import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';

import styles from '../Styles/IntroductionScreenStyle';
import Button from '../../Components/Button';
import { requestPermission } from '../../Lib/LocationHelper';

export default class Step3Screen extends Component {

  requestLocationPermission = () => {
    requestPermission().then(() => {
      NavigationActions.introStep4Screen();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{I18n.t('Introduction_step3_title')}</Text>
            <Text style={styles.description}>{I18n.t('Introduction_step3_description')}</Text>
          </View>
        </ScrollView>
        <View styles={styles.footer}>
          <Button onPress={this.requestLocationPermission} text={I18n.t('Introduction_step3_btn')} />
        </View>
      </View>
    );
  }

}
