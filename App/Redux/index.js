// @flow

import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import { reducer as auth } from './AuthRedux';
import { reducer as location } from './LocationRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    auth,
    location,
  });

  return configureStore(rootReducer, rootSaga);
};
