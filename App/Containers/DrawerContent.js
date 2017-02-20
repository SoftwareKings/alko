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
// import { Actions as NavigationActions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';

import DrawerButton from '../Components/DrawerButton';
import styles from './Styles/DrawerContentStyle';
import { Images } from '../Themes';
import AuthActions from '../Redux/AuthRedux';

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
    this.props.signOut();
    // Just to test onboard multiple times
    setTimeout(() => this.toggleDrawer(), 500);
    setTimeout(() => this.props.signIn(), 1500);
  }

  toggleDrawer() {
    this.context.drawer.toggle();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image source={Images.sampleAvatar} style={styles.avatar} />
          </View>
          <Text style={styles.name}>{this.props.profile.displayName}</Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          <DrawerButton isActive text={I18n.t('BARS')} />
          <DrawerButton text={I18n.t('PROFILE')} />
          <DrawerButton text={I18n.t('PUSH_NOTIFICATIONS')} />
          <DrawerButton text={I18n.t('TERMS_OF_SERVICE')} />
          <DrawerButton text={I18n.t('PRIVACY_POLICY')} />
          <DrawerButton text={I18n.t('SEND_FEEDBACK')} />
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
  profile: state.auth.profile,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(AuthActions.signOut()),
  signIn: () => dispatch(AuthActions.signIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
