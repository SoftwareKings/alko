import React from 'react';

import DrinkUpScreen from '../DrinkupScreen';
import NoDrinkUp from './NoDrinkUpScreen';
import ItsJustMe from './ItsJustMeScreen';

export default function () {

  const config = {
    drinkUp: true,
    twoForOne: false,
    itsJustMe: false, // Only relevant if drinkUp === true
  };

  if (config.drinkUp) {
    if (config.itsJustMe) {
      return <ItsJustMe {...config} />;
    }
    return <DrinkUpScreen />;
  }

  return <NoDrinkUp {...config} />;

}
