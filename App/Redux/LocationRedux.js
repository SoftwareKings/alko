import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  locationRequest: [],
  locationSuccess: ['position'],
  locationFailure: ['error'],
});

export const LocationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  position: null,
  fetching: null,
  error: null,
};

/* ------------- Reducers ------------- */

export const request = state => Object.assign({}, state, { fetching: true });

export const success = (state, { position }) => Object.assign({}, state, { position, fetching: false });

export const failure = state => Object.assign({}, state, { fetching: false, position: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOCATION_REQUEST]: request,
  [Types.LOCATION_SUCCESS]: success,
  [Types.LOCATION_FAILURE]: failure,
});
