// @flow

import React, { Component } from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import { Connect } from '../Redux';
import NavigationDrawer from './NavigationDrawer';
import NavItems from './NavItems';
import { slideLeft } from '../Themes/NavigationAnimations';

import SplashScreen from '../Containers/SplashScreen';

// Onboarding
import IntroductionStep1Screen from '../Containers/Introduction/Step1';
import IntroductionStep2Screen from '../Containers/Introduction/Step2';
import IntroductionStep3Screen from '../Containers/Introduction/Step3';
import IntroductionStep4Screen from '../Containers/Introduction/Step4';

// Main
import MapScreen from '../Containers/MapScreen';
import JoinDrinkUp from '../Containers/JoinDrinkUp';
import DrinkUp from '../Containers/DrinkUp';
import Redeem2For1Screen from '../Containers/Redeem2For1Screen';
import SponsoredScreen from '../Containers/SponsoredScreen';

// Drawer
import EditProfileScreen from '../Containers/EditProfileScreen';
import TermsOfServiceScreen from '../Containers/Legal/TermsOfServiceScreen';
import PrivacyPolicyScreen from '../Containers/Legal/PrivacyPolicyScreen';

import NavBar from './NavBar';

class NavigationRouter extends Component {
  render() {
    return (
      <Router animationStyle={slideLeft}>
        <Scene key="drawer" component={NavigationDrawer}>
          <Scene key="drawerChildrenWrapper" navBar={NavBar}>
            <Scene initial key="splashScreen" type={ActionConst.RESET} component={SplashScreen} hideNavBar />
            <Scene key="onboard" type={ActionConst.RESET} >
              <Scene key="introStep1Screen" component={IntroductionStep1Screen} hideNavBar />
              <Scene key="introStep2Screen" component={IntroductionStep2Screen} hideNavBar />
              <Scene key="introStep3Screen" component={IntroductionStep3Screen} hideNavBar />
              <Scene key="introStep4Screen" component={IntroductionStep4Screen} hideNavBar />
            </Scene>
            <Scene key="map" type={ActionConst.RESET} component={MapScreen} title="ALKO" renderTitle={NavItems.brandTitle} renderLeftButton={NavItems.hamburgerButton(this.props.actions.openDrawer)} />
            <Scene key="joinDrinkUp" component={JoinDrinkUp} title="Join DrinkUp" renderLeftButton={NavItems.backButton} />
            <Scene key="drinkUp" type={ActionConst.RESET} component={DrinkUp} title="DrinkUp" renderLeftButton={NavItems.hamburgerButton(this.props.actions.openDrawer)} />

            <Scene
              key="editProfile"
              type={ActionConst.RESET}
              component={EditProfileScreen}
              title={I18n.t('Profile_Edit')}
              renderLeftButton={NavItems.hamburgerButton(this.props.actions.openDrawer)}
            />

            <Scene
              key="termsOfService"
              type={ActionConst.RESET}
              component={TermsOfServiceScreen}
              title={I18n.t('TERMS_OF_SERVICE')}
              renderLeftButton={NavItems.hamburgerButton(this.props.actions.openDrawer)}
            />

            <Scene
              key="privacyPolicy"
              type={ActionConst.RESET}
              component={PrivacyPolicyScreen}
              title={I18n.t('PRIVACY_POLICY')}
              renderLeftButton={NavItems.hamburgerButton(this.props.actions.openDrawer)}
            />

            <Scene key="sponsoredScreen" component={SponsoredScreen} renderLeftButton={NavItems.backButton} />
            <Scene key="redeem2for1Screen" component={Redeem2For1Screen} hideNavBar />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default Connect(NavigationRouter);
