import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  openDrawer: null,
  closeDrawer: null,
});

export const DrawerTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  show: false,
};

/* ------------- Reducers ------------- */

export const openDrawer = state => Object.assign({}, state, { show: true });
export const closeDrawer = state => Object.assign({}, state, { show: false });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_DRAWER]: openDrawer,
  [Types.CLOSE_DRAWER]: closeDrawer,
});
