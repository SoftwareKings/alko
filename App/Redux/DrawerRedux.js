import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  openDrawer: null,
  closeDrawer: null,
  setActivePage: ['page'],
});

export const DrawerTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  show: false,
  active: 'map',
};

/* ------------- Reducers ------------- */

function mapState(generateNewState) {
  return (state, action) => {
    const data = generateNewState(state, action);
    return Object.assign({}, state, data);
  };
}

export const openDrawer = mapState(() => ({ show: true }));
export const closeDrawer = mapState(() => ({ show: false }));
export const setActivePage = mapState((state, { page }) => ({ page }));

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_DRAWER]: openDrawer,
  [Types.CLOSE_DRAWER]: closeDrawer,
  [Types.SET_ACTIVE_PAGE]: setActivePage,
});
