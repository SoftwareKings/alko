// @flow
import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  BackAndroid,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';

import { Connect } from '../Redux';
import DrawerButton from '../Components/DrawerButton';
import styles from './Styles/DrawerContentStyle';
import { Images } from '../Themes';

class DrawerContent extends Component {

  static defaultProps = {
    profile: {
      displayName: '',
    },
  }

  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer();
        return true;
      }
      return false;
    });
  }

  onLogout() {
    this.props.actions.signOut();
    // Just to test onboard multiple times
    setTimeout(() => this.toggleDrawer(), 500);
    setTimeout(() => this.props.actions.signIn(), 1500);
  }

  toggleDrawer() {
    this.context.drawer.toggle();
  }

  navigateTo = page => () => {
    this.props.actions.setActivePage(page);
    NavigationActions[page]();
    this.props.actions.closeDrawer();
  }

  render() {
    const { auth: { profile }, active, joined } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image source={Images.sampleAvatar} style={styles.avatar} />
          </View>
          <Text style={styles.name}>{profile.displayName}</Text>
        </View>
        <ScrollView style={styles.contentContainer}>

          {
            joined ?
              <DrawerButton
                isActive={active === 'drinkUp'}
                text={I18n.t('DRINK_UP')}
                onPress={this.navigateTo('drinkUp')}
              />
            :
              <DrawerButton
                isActive={active === 'map'}
                text={I18n.t('BARS')}
                onPress={this.navigateTo('map')}
              />
          }

          <DrawerButton
            isActive={active === 'profile'}
            text={I18n.t('PROFILE')}
            onPress={() => {}}
          />

          <DrawerButton
            isActive={active === 'pushNotifications'}
            text={I18n.t('PUSH_NOTIFICATIONS')}
            onPress={() => {}}
          />

          <DrawerButton
            isActive={active === 'termsOfService'}
            text={I18n.t('TERMS_OF_SERVICE')}
            onPress={this.navigateTo('termsOfService')}
          />

          <DrawerButton
            isActive={active === 'privacyPolicy'}
            text={I18n.t('PRIVACY_POLICY')}
            onPress={this.navigateTo('privacyPolicy')}
          />

          <DrawerButton
            isActive={active === 'feedback'}
            text={I18n.t('SEND_FEEDBACK')}
            onPress={() => {}}
          />

        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.onLogout}>
            <Text style={styles.copyright}>© 2017 ALKO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth,
  active: state.drawer.page,
  joined: state.drinkup.joined,
});

export default Connect(DrawerContent, mapStateToProps);
