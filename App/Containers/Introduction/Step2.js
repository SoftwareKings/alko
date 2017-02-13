import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'
import I18n from 'react-native-i18n'
import Button from 'app/Components/Button'
import styles from '../Styles/IntroductionScreenStyle'
import {Images} from 'app/Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Step1Screen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View style={[styles.contentContainer, styles.centerContainer]}>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, styles.stepTitle]}>{I18n.t('Introduction_step2_title')}</Text>
              <Text style={[styles.description, styles.stepSubtitle]}>{I18n.t('Introduction_step2_subtitle')}</Text>
            </View>
            <Image style={styles.stepImage} source={Images.introStep2} />
            <Text style={[styles.description, styles.stepSubtitle]}>{I18n.t('Introduction_step2_description')}</Text>
          </View>
        </ScrollView>
        <View styles={styles.footer}>
          <Button onPress={NavigationActions.introStep3Screen} text={I18n.t('Introduction_step2_btn')} />
        </View>
      </View>
    )
  }

}
