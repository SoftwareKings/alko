import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  alertsRequest: [],
  alertsSuccess: ['alerts'],
  alertsFailure: ['error'],
  markAlertAsRead: ['alert'],
});

export const AlertTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  alerts: {},
  fetching: null,
  error: null,
};

/* ------------- Reducers ------------- */

export const request = state => Object.assign({}, state, { fetching: true });

export const success = (state, { alerts }) => Object.assign({}, state, { alerts, fetching: false });

export const failure = (state, { error }) => Object.assign({}, state, { error, alerts: null });

export const readAlert = (state, { alert }) => {
  const alerts = Object.assign({}, state.alerts);
  alerts[alert.id].read = true;
  return Object.assign({}, state, { alerts });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ALERTS_REQUEST]: request,
  [Types.ALERTS_SUCCESS]: success,
  [Types.ALERTS_FAILURE]: failure,
  [Types.MARK_ALERT_AS_READ]: readAlert,
});
