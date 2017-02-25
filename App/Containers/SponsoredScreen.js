import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import I18n from 'react-native-i18n';
import moment from 'moment';

import styles from './Styles/SponsoredScreenStyle';
import Button from '../Components/Button';

export default class SponsoredScreen extends Component {

  static propTypes = {
    event: PropTypes.object,
  }

  static defaultProps = {
    event: {
      from: moment('20170302T200000'),
      to: moment('20170303T020000'),
      description: 'ALKO and License No 1 are throwing a party to celebrate the launch of ALKO.\n\nA Drink-up will be going on the whole time, so you\'ll be able to get your 2 for 1 ALKO special anytime that night.',
      howTitle: 'Wish I could get 2 free drinks...',
      howDescription: 'You know what? Me too. And license No 1 is making it happen. On Thursday, you\'ll be able to unlock the 2 for 1 special twice.',
    },
  }

  render() {
    const { event } = this.props;
    return (
      <View style={[styles.mainContainer, styles.container]}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{event.from.format('dddd')}, {event.from.format('ha')} to {event.to.format('ha')}</Text>
            <Text style={styles.description}>{event.description}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{event.howTitle}</Text>
            <Text style={styles.description}>{event.howDescription}</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button text={I18n.t('close')} />
        </View>
      </View>
    );
  }

}
