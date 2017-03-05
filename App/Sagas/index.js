import { takeLatest } from 'redux-saga';
// import API from '../Services/Api';
// import FixtureAPI from '../Services/FixtureApi';
// import DebugSettings from '../Config/DebugSettings';

/* ------------- Types ------------- */

import { AlertTypes } from '../Redux/AlertRedux';
import { AuthTypes } from '../Redux/AuthRedux';
import { LocationTypes } from '../Redux/LocationRedux';
import { StartupTypes } from '../Redux/StartupRedux';
import { OpenScreenTypes } from '../Redux/OpenScreenRedux';

/* ------------- Sagas ------------- */

import {
  signIn,
  signOut,
  signOutSuccess,
  getOrCreateProfile,
  createProfile,
  getProfile,
  createProfileProperty,
  updateProfileProperty,
} from './AuthSagas';

import { getLocation } from './LocationSagas';
import { getAlerts } from './AlertSagas';
import { startup } from './StartupSagas';
import { openScreen } from './OpenScreenSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(AuthTypes.SIGN_IN, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_IN_FULFILLED, getOrCreateProfile),
    takeLatest(AuthTypes.SIGN_OUT_FULFILLED, signOutSuccess),
    takeLatest(AuthTypes.GET_PROFILE, getProfile),
    takeLatest(AuthTypes.CREATE_PROFILE, createProfile),
    takeLatest(AuthTypes.CREATE_PROFILE_PROPERTY, createProfileProperty),
    takeLatest(AuthTypes.CREATE_PROFILE_FULFILLED, getProfile),
    takeLatest(AuthTypes.UPDATE_PROFILE_PROPERTY, updateProfileProperty),
    takeLatest(LocationTypes.LOCATION_REQUEST, getLocation),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),
    takeLatest(LocationTypes.LOCATION_REQUEST, getLocation),
    takeLatest(AlertTypes.ALERTS_REQUEST, getAlerts),
  ];
}
