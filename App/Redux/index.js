// @flow

import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import { reducer as auth } from './AuthRedux';
import DrawerActions, { reducer as drawer } from './DrawerRedux';
import { reducer as location } from './LocationRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    auth,
    drawer,
    location,
  });

  return configureStore(rootReducer, rootSaga);
};

const mapDispatchToProps = dispatch => ({
  actions: {
    openDrawer: () => dispatch(DrawerActions.openDrawer()),
    closeDrawer: () => dispatch(DrawerActions.closeDrawer()),
  },
});

export function Connect(component, mapStateToProps) {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
