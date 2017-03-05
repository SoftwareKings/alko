import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  barsRequest: [],
  barsRequestSuccess: ['bars'],
  barsRequestFailure: ['error'],
});

export const BarTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  bars: [],
  fetching: false,
  error: null,
};

/* ------------- Reducers ------------- */
export const barsRequest = (state: Object) => Object.assign({}, state, {
  fetching: true,
});

export const barsRequestSuccess = (state: Object, { bars }) => Object.assign({}, state, {
  fetching: false,
  bars,
});

export const barsRequestFailure = (state: Object, { error }) => Object.assign({}, state, {
  bars: null,
  fetching: false,
  error,
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.BARS_REQUEST]: barsRequest,
  [Types.BARS_REQUEST_SUCCESS]: barsRequestSuccess,
  [Types.BARS_REQUEST_FAILURE]: barsRequestFailure,
});
