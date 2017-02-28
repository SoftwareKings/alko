import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import I18n from 'react-native-i18n';
import moment from 'moment';
import { Actions as NavigationActions } from 'react-native-router-flux';

import styles from './Styles/Redeem2For1ScreenStyle';
import Button from '../Components/Button';
import { Images } from '../Themes';

export default class Redeem2For1Screen extends Component {

  static propTypes = {
    freeDrink: PropTypes.object,
  }

  static defaultProps = {
    freeDrink: {
      name: 'Bohemian Biergarten',
      date: '20170307T090000',
    },
  }

  render() {
    const { freeDrink } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View style={[styles.contentContainer, styles.centerContainer]}>
            <Text style={styles.title}>{I18n.t('Redeem_ALKO')}</Text>
            <Image style={styles.image} source={Images.introStep2} />
            <Text style={styles.giftName}>{I18n.t('Redeem_2For1Special')}</Text>
            <Text style={styles.packName}>{freeDrink.name.toUpperCase()}</Text>
            <Text style={styles.date}>{moment(freeDrink.date).format('dddd, MMMM D').toUpperCase()}</Text>
            <View style={styles.guideContainer}>
              <Text style={styles.disappearTime}>{`${I18n.t('Redeem_ThisDealWillDisappear')} ${moment().to(moment(freeDrink.date))}`}</Text>
              <Text style={styles.guide}>{I18n.t('Redeem_GuideToRedeem')}</Text>
            </View>
          </View>
        </ScrollView>
        <View styles={styles.footer}>
          <Button onPress={NavigationActions.pop} theme={'disallow'} text={I18n.t('close')} />
        </View>
      </View>
    );
  }

}
