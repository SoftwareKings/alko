// @flow

import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import { reducer as auth } from './AuthRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    auth,
  });

  return configureStore(rootReducer, rootSaga);
};
