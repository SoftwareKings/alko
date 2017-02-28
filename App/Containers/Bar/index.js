import React from 'react';

import NoDrinkUp from './NoDrinkUpScreen';
import ItsJustMe from './ItsJustMeScreen';

export default function () {

  const config = {
    drinkUp: false,
    twoForOne: true,
    itsJustMe: false, // Only relevant if drinkUp === true
  };

  if (config.drinkUp) {
    if (config.itsJustMe) {
      return <ItsJustMe {...config} />;
    }
    return null;
  }

  return <NoDrinkUp {...config} />;

}
