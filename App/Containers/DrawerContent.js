// @flow
/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Image,
  BackAndroid,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles/DrawerContentStyle';
import { Images, Metrics } from '../Themes';

class DrawerButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    isActive: PropTypes.bool,
  }

  render() {
    const {text, isActive} = this.props;
    const containerStyle = [styles.btnDrawer, isActive ? styles.btnDrawerActive : null];
    const textStyle = [styles.btnDrawerText, isActive ? styles.btnDrawerTextActive: null];
    const iconStyle = [styles.btnDrawerIcon, isActive ? styles.btnDrawerIconActive: null];

    return (
      <TouchableOpacity style={containerStyle}>
        <Text style={textStyle}>{text}</Text>
        <Icon name="keyboard-arrow-right"
          size={Metrics.icons.medium}
          style={iconStyle} />
      </TouchableOpacity>
    );
  }
}

class DrawerContent extends Component {

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer();
        return true;
      }
      return false;
    });
  }

  toggleDrawer() {
    this.context.drawer.toggle();
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image source={Images.sampleAvatar} style={styles.avatar} />
          </View>
          <Text style={styles.name}>Abby</Text>
        </View>
        <View style={styles.contentContainer}>
          <DrawerButton isActive text={I18n.t('BARS')} />
          <DrawerButton text={I18n.t('PROFILE')} />
          <DrawerButton text={I18n.t('PUSH_NOTIFICATIONS')} />
          <DrawerButton text={I18n.t('TERMS_OF_SERVICE')} />
          <DrawerButton text={I18n.t('PRIVACY_POLICY')} />
          <DrawerButton text={I18n.t('SEND_FEEDBACK')} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.copyright}>© 2017 ALKO</Text>
        </View>
      </ScrollView>
    );
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object,
};

export default DrawerContent;
