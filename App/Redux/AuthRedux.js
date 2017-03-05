// @flow

import { createReducer, createActions } from 'reduxsauce';
import { createSelector } from 'reselect';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // Sign In Actions
  signIn: [],
  signInFulfilled: ['authUser'],
  signInFailed: ['error'],
  // Sign Out Actions
  signOut: [],
  signOutFulfilled: [],
  signOutFailed: ['error'],
  // Create Profile Actions
  createProfile: ['authUser'],
  createProfileFulfilled: [],
  createProfileFailed: ['error'],
  // Get Profile Actions
  getProfile: ['authUser'],
  getProfileFulfilled: ['profile'],
  getProfileFailed: ['error'],
  // Create Profile Propery Actions
  createProfileProperty: ['key', 'value'],
  createProfilePropertyFulfilled: ['diff'],
  // Update Profile Propery Actions
  updateProfileProperty: ['key', 'value'],
  updateProfilePropertyFulfilled: ['diff'],
  updateProfilePropertyFailed: [],
  // Delete Profile Propery Actions
  deleteProfilePropertyFulfilled: ['diff'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  profile: {
    displayName: '',
  },
  error: null,
  fetching: false,
  authenticated: false,
  created: false,
  uid: null,
};

/* ------------- Reducers ------------- */

export const request = (state: Object) => Object.assign({}, state, { fetching: true });

export const signInSuccess = (state: Object, { authUser }) => Object.assign({}, state, {
  fetching: false,
  authenticated: true,
  uid: authUser.uid,
});

export const signOutSuccess = () => Object.assign({}, INITIAL_STATE);

export const profileCreated = (state: Object) => Object.assign({}, state, { fetching: false, created: true });

export const profileSuccess = (state: Object, { profile }) => Object.assign({}, state, {
  fetching: false,
  created: true,
  profile,
});

export const profilePropertyUpdated = (state: Object, { diff }) => Object.assign({}, state, { profile: Object.assign({}, state.profile, diff) });

export const profilePropertyCreated = (state: Object, { diff }) => Object.assign({}, state, { profile: Object.assign({}, state.profile, diff) });

export const profilePropertyDeleted = (state: Object, { diff }) => {
  const profile = Object.assign({}, state.profile);
  const keysToDelete = Object.keys(diff);
  keysToDelete.forEach(key => delete profile[key]);
  return Object.assign({}, state, { profile });
};

// we've had a problem logging in
export const failure = (state: Object, { error }: Object) => Object.assign({}, state, { fetching: false, error });


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN]: request,
  [Types.CREATE_PROFILE]: request,
  [Types.GET_PROFILE]: request,
  [Types.SIGN_OUT]: request,
  [Types.SIGN_IN_FULFILLED]: signInSuccess,
  [Types.SIGN_OUT_FULFILLED]: signOutSuccess,
  [Types.CREATE_PROFILE_FULFILLED]: profileCreated,
  [Types.GET_PROFILE_FULFILLED]: profileSuccess,
  [Types.UPDATE_PROFILE_PROPERTY_FULFILLED]: profilePropertyUpdated,
  [Types.CREATE_PROFILE_PROPERTY_FULFILLED]: profilePropertyCreated,
  [Types.DELETE_PROFILE_PROPERTY_FULFILLED]: profilePropertyDeleted,
  [Types.SIGN_IN_FAILED]: failure,
  [Types.SIGN_OUT_FAILED]: failure,
  [Types.CREATE_PROFILE_FAILED]: failure,
  [Types.GET_PROFILE_FAILED]: failure,
});

/* ------------- Selectors ------------- */

export const isAuthenticated = (state: Object) => state.auth.authenticated;
export const getAuth = createSelector(
  state => state.auth,
  auth => auth.toJS()
);
