// @flow

import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import AuthActions, { reducer as auth } from './AuthRedux';
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

    signOut: () => dispatch(AuthActions.signOut()),
    signIn: () => dispatch(AuthActions.signIn()),

    openDrawer: () => dispatch(DrawerActions.openDrawer()),
    closeDrawer: () => dispatch(DrawerActions.closeDrawer()),
    setActiveDrawerButton: page => dispatch(DrawerActions.setActiveDrawerButton(page)),

  },
});

export function Connect(component, mapStateToProps) {
  if (!mapStateToProps) {
    // eslint-disable-next-line no-param-reassign
    mapStateToProps = state => ({
      auth: state.auth,
    });
  }
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
