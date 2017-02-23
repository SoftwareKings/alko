import React, { Component } from 'react';
import { Text, View } from 'react-native';
import I18n from 'react-native-i18n';

import Styles from '../Styles/BarScreenStyle';
import Button from '../../Components/Button';
import Banner from '../../Components/Banner';

class NoDrinkUpScreen extends Component {

  render() {
    const { twoForOne } = this.props;

    return (
      <View style={Styles.mainContainer}>
        {twoForOne ? (
          <Banner
            text={I18n.t('Bar_StartADrinkUpForSpecial')}
            style={Styles.banner}
          />
        ) : null}
        <View style={Styles.contentContainer}>

          <View style={Styles.section}>
            <Text style={Styles.header}>{I18n.t('Bar_OkayLetsDoThis_Header')}</Text>
            <Text style={Styles.body}>{I18n.t('Bar_OkayLetsDoThis_Body')}</Text>
          </View>

          {twoForOne ? (
            <View style={Styles.section}>
              <Text style={Styles.header}>{I18n.t('Bar_WheresMyTwoForOne_Header')}</Text>
              <Text style={Styles.body}>{I18n.t('Bar_WheresMyTwoForOne_Body')}</Text>
            </View>
          ) : null}

        </View>
        <View style={Styles.footer}>
          <Button onPress={() => {}} text={I18n.t('Bar_StartADrinkUp')} />
        </View>
      </View>
    );
  }

}

export default NoDrinkUpScreen;
