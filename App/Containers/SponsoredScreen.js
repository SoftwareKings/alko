import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';

import styles from './Styles/SponsoredScreenStyle';
import Button from '../Components/Button';

export default class SponsoredScreen extends Component {

  static propTypes = {
    content: PropTypes.array,
  }

  render() {
    return (
      <View style={[styles.mainContainer, styles.container]}>
        <ScrollView style={styles.contentContainer}>
          {
            this.props.content.map((content, i) => (
              <View key={i} style={styles.section}>
                <Text style={styles.sectionTitle}>{content.header}</Text>
                <Text style={styles.description}>{content.body}</Text>
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.footer}>
          <Button text={I18n.t('close')} onPress={NavigationActions.pop} />
        </View>
      </View>
    );
  }

}
