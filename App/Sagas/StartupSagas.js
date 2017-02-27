import { call, put, select } from 'redux-saga/effects';
import { is } from 'ramda';

import { firebaseAuth, firebaseDb } from '../Firebase';
import authActions from '../Redux/AuthRedux';

// process STARTUP actions

function initAuth() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      (authUser) => {
        if (authUser) {
          resolve(authUser);
        }

        resolve(null);
        unsubscribe();
      },
      error => reject(error)
    );
  });
}

/* eslint no-unused-vars: 0 */
export function* startup(action) {
  try {
    const authData = yield call(initAuth);
    if (authData) {
      yield put(authActions.signInFulfilled(authData));
    } else {
      yield put(authActions.signIn());
    }
  } catch (err) {
    yield put(authActions.signInFailed(err));
  }
}
