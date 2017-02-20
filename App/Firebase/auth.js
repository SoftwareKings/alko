import { firebaseAuth } from './firebase';
import authActions from '../Redux/AuthRedux';

export default function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      (authUser) => {
        if (authUser) {
          dispatch(authActions.signInFulfilled(authUser));
        }

        resolve();
        unsubscribe();
      },

      error => reject(error)
    );
  });
}
