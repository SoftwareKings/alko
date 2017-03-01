import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  joinDrinkup: ['joined', 'members'],
});
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  joined: false,
  members: null,
};

/* ------------- Reducers ------------- */
export const joinDrinkup = (state: Object, { joined, members }) => Object.assign({}, state, {
  joined,
  members,
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.JOIN_DRINKUP]: joinDrinkup,
});
