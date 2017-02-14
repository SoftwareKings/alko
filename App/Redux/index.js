// @flow

import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import { reducer as temperature } from './TemperatureRedux';
import { reducer as login } from './LoginRedux';
import { reducer as search } from './SearchRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    temperature,
    login,
    search,
  });

  return configureStore(rootReducer, rootSaga);
};
