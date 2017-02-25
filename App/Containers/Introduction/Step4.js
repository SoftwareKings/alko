import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import Button from '../../Components/Button';
import Switch from '../../Components/Switch';
import styles from '../Styles/IntroductionScreenStyle';
import AuthActions from '../../Redux/AuthRedux';

class Step4Screen extends Component {

  constructor(...args) {
    super(...args);
    this.onLaterButtonPress = this.onLaterButtonPress.bind(this);
    this.onAcceptButtonPress = this.onAcceptButtonPress.bind(this);
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

  onLaterButtonPress() {
    this.props.setOnboardingComplete();
    NavigationActions.mainScreen();
  }

  onAcceptButtonPress() {
    this.props.setOnboardingComplete();
    NavigationActions.mainScreen();
  }

  render() {
    const { days } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.sectionTitle}>{I18n.t('Introduction_step4_title')}</Text>
          <Text style={styles.description}>{I18n.t('Introduction_step4_description')}</Text>
        </View>
        <ScrollView style={[styles.scrollContainer, styles.settingContainer]}>
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
        </ScrollView>
        <View styles={styles.footer}>
          <Button
            onPress={this.onAcceptButtonPress}
            text={I18n.t('Introduction_step4_btn')}
          />
          <Button
            theme="disallow"
            onPress={this.onLaterButtonPress}
            text={I18n.t('Introduction_step4_disallow')}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setOnboardingComplete: () => dispatch(AuthActions.createProfileProperty('onboardingComplete', true)),
});

export default connect(null, mapDispatchToProps)(Step4Screen);
