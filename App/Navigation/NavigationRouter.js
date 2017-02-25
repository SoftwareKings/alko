// @flow

import React, { Component } from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import NavigationDrawer from './NavigationDrawer';
import NavItems from './NavItems';
import { slideLeft } from '../Themes/NavigationAnimations';

import SplashScreen from '../Containers/SplashScreen';

import IntroductionStep1Screen from '../Containers/Introduction/Step1';
import IntroductionStep2Screen from '../Containers/Introduction/Step2';
import IntroductionStep3Screen from '../Containers/Introduction/Step3';
import IntroductionStep4Screen from '../Containers/Introduction/Step4';

import MainScreen from '../Containers/MainScreen';
import BarScreen from '../Containers/Bar';
import SponsoredScreen from '../Containers/SponsoredScreen';
import DrinkupScreen from '../Containers/DrinkupScreen';

import NavBar from './NavBar';

class NavigationRouter extends Component {
  render() {
    return (
      <Router animationStyle={slideLeft}>
        <Scene key="drawer" component={NavigationDrawer} open={false}>
          <Scene key="drawerChildrenWrapper" navBar={NavBar}>
            <Scene initial key="splashScreen" component={SplashScreen} hideNavBar />
            <Scene key="onboard" type={ActionConst.RESET} >
              <Scene key="introStep1Screen" component={IntroductionStep1Screen} hideNavBar />
              <Scene key="introStep2Screen" component={IntroductionStep2Screen} hideNavBar />
              <Scene key="introStep3Screen" component={IntroductionStep3Screen} hideNavBar />
              <Scene key="introStep4Screen" component={IntroductionStep4Screen} hideNavBar />
            </Scene>
            <Scene key="mainScreen" type={ActionConst.RESET} component={MainScreen} title="ALKO" renderTitle={NavItems.brandTitle} renderLeftButton={NavItems.hamburgerButton} />
            <Scene key="bar" component={BarScreen} title="License No 1" renderLeftButton={NavItems.backButton} />
            <Scene key="sponsoredScreen" component={SponsoredScreen} renderLeftButton={NavItems.backButton} />
            <Scene key="drinkupScreen" component={DrinkupScreen} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
