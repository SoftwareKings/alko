/* eslint-disable no-constant-condition */

import { call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { Actions as NavigationActions } from 'react-native-router-flux';

import authActions from '../Redux/AuthRedux';
import { firebaseAuth } from '../Firebase';
import User from '../Firebase/data/user';

function subscribe() {
  return eventChannel(emit => User.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* write(context, method, onError, ...params) {
  try {
    yield call([context, method], ...params);
  } catch (error) {
    yield put(onError(error));
  }
}

export function* signIn() {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInAnonymously]);
    yield put(authActions.signInFulfilled(authData));
  } catch (error) {
    yield put(authActions.signInFailed(error));
  }
}

export function* signOut() {
  try {
    User.path = `users/${firebaseAuth.currentUser.uid}`;
    yield call([firebaseAuth.currentUser, firebaseAuth.currentUser.delete]);
    yield call(write, User, User.set, authActions.createProfileFailed, null);
    yield put(authActions.signOutFulfilled());
  } catch (error) {
    yield put(authActions.signOutFailed(error));
  }
}

export function* signOutSuccess() {
  yield call([NavigationActions, NavigationActions.onboard]);
}

export function* getOrCreateProfile(dataAuth) {
  try {
    const authData = firebaseAuth.currentUser || dataAuth;
    User.path = `users/${authData.uid}`;
    const userExists = yield call([User, User.exists]);
    if (userExists) {
      yield put(authActions.getProfile(authData));
    } else {
      yield put(authActions.createProfile(authData));
    }
  } catch (error) {
    yield put(authActions.getProfileFailed(error));
  }
}

export function* getProfile(dataAuth) {
  try {
    const authData = firebaseAuth.currentUser || dataAuth;
    User.path = `users/${authData.uid}`;
    yield call(read);
  } catch (error) {
    yield put(authActions.getProfileFailed(error));
  }
}

export function* createProfile(dataAuth) {
  try {
    const authData = firebaseAuth.currentUser || dataAuth;
    User.path = `users/${authData.uid}`;
    yield call(write, User, User.set, authActions.createProfileFailed, { displayName: 'Alko User' });
    yield put(authActions.createProfileFulfilled());
  } catch (error) {
    yield put(authActions.createProfileFailed(error));
  }
}

export function* createProfileProperty({ key, value }) {
  try {
    const authData = firebaseAuth.currentUser;
    User.path = `users/${authData.uid}/${key}`;
    yield call(write, User, User.set, authActions.createProfileFailed, value);
  } catch (error) {
    yield put(authActions.createProfileFailed(error));
  }
}

export function* updateProfileProperty({ key, value }) {
  try {
    const authData = firebaseAuth.currentUser;
    User.path = `users/${authData.uid}/${key}`;
    yield call(write, User, User.set, authActions.updateProfilePropertyFailed, value);
  } catch (error) {
    yield put(authActions.updateProfilePropertyFailed(error));
  }
}
