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
    if (__DEV__ && console.tron) {
      // straight-up string logging
      console.tron.log('Hello, I\'m an example of how to log via Reactotron.');

      // fully customized!
      const subObject = { a: 1, b: [1, 2, 3], c: true };
      subObject.circularDependency = subObject; // osnap!
      console.tron.display({
        name: '🔥 IGNITE 🔥',
        preview: 'You should totally expand this',
        value: {
          '💃': 'Welcome to the future!',
          subObject,
          someInlineFunction: () => true,
          someGeneratorFunction: startup,
        },
      });
    }
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
