import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import I18n from 'react-native-i18n'
import Button from 'app/Components/Button'
import styles from '../Styles/IntroductionScreenStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Step3Screen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{I18n.t('Introduction_step3_title')}</Text>
            <Text style={styles.description}>{I18n.t('Introduction_step3_description')}</Text>
          </View>
        </View>
        <View styles={styles.footer}>
          <Button onPress={NavigationActions.introStep4Screen} text={I18n.t('Introduction_step3_btn')} />
        </View>
      </View>
    )
  }

}
