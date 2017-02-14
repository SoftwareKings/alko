import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import I18n from 'react-native-i18n';
import Button from '../../Components/Button';
import Switch from '../../Components/Switch';
import styles from '../Styles/IntroductionScreenStyle';
import { Colors } from '../../Themes';

export default class Step4Screen extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      days: [
        { name: I18n.t('SUNDAY'), enabled: false },
        { name: I18n.t('MONDAY'), enabled: true },
        { name: I18n.t('TUESDAY'), enabled: false },
        { name: I18n.t('WEDNESDAY'), enabled: true },
        { name: I18n.t('THURSDAY'), enabled: true },
        { name: I18n.t('FRIDAY'), enabled: true },
        { name: I18n.t('SATURDAY'), enabled: true },
      ],
    };
  }

  onUpdateSetting = (index, value) => {
    // eslint-disable-next-line prefer-const
    let newDays = this.state.days;
    newDays[index].enabled = value;
    this.setState({ days: newDays });
  }

  render() {
    const { days } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{I18n.t('Introduction_step4_title')}</Text>
            <Text style={styles.description}>{I18n.t('Introduction_step4_description')}</Text>
          </View>
          <View style={styles.settingContainer}>
            {
              days.map((item, index) =>
                <View key={item.name} style={styles.settingRow}>
                  <Text style={styles.settingName}>{item.name}</Text>
                  <Text style={[
                    styles.switcherStatus,
                    !item.enabled ? styles.switcherStatusOff : null,
                  ]}>{item.enabled ? I18n.t('ON') : I18n.t('OFF')}</Text>
                  <Switch value={item.enabled}
                    onSyncPress={value => this.onUpdateSetting(index, value)} />
                </View>
              )
            }
          </View>
        </ScrollView>
        <View styles={styles.footer}>
          <Button text={I18n.t('Introduction_step4_btn')} />
          <Button
            style={styles.btnDisallow}
            textStyle={styles.btnDisallowText}
            gradientColors={[Colors.tundora, Colors.tundora]}
            text={I18n.t('Introduction_step4_disallow')}
          />
        </View>
      </View>
    );
  }

}
