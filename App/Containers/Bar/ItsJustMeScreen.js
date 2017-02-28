import React, { Component } from 'react';
import { Text, View } from 'react-native';
import I18n from 'react-native-i18n';

import Styles from '../Styles/BarScreenStyle';
import Button from '../../Components/Button';

class ItsJustMeScreen extends Component {

  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.contentContainer}>

          <View style={Styles.section}>
            <Text style={Styles.header}>{I18n.t('Bar_ItsJustMe_2for1_Header')}</Text>
            <Text style={Styles.body}>{I18n.t('Bar_ItsJustMe_2for1_Body')}</Text>
          </View>

        </View>
        <View style={Styles.footer}>
          <Text style={Styles.footerText}>{I18n.t('Bar_ItsJustMe_Footer')}</Text>
          <Button
            theme="dark"
            onPress={() => {}}
            text={I18n.t('Bar_ItsJustMe_Button')}
          />
        </View>
      </View>
    );
  }

}

export default ItsJustMeScreen;
