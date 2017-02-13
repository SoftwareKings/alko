import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import I18n from 'react-native-i18n';
import Button from 'app/Components/Button';
import styles from '../Styles/IntroductionScreenStyle';

export default class Step4Screen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{I18n.t('Introduction_step4_title')}</Text>
            <Text style={styles.description}>{I18n.t('Introduction_step4_description')}</Text>
          </View>
        </ScrollView>
        <View styles={styles.footer}>
          <Button text={I18n.t('Introduction_step4_btn')} />
          <Button style={styles.btnDisallow} textStyle={styles.btnDisallowText} text={I18n.t('Introduction_step4_disallow')} />
        </View>
      </View>
    );
  }

}
