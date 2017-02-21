import { call, put } from 'redux-saga/effects';
import LocationActions from '../Redux/LocationRedux';

const getPosition = options => new Promise((resolve, reject) => {
  window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
});

export function* getLocation() {
  try {
    const position = yield call(getPosition);
    yield put(LocationActions.locationSuccess(position));
  } catch (error) {
    yield put(LocationActions.locationFailure(error));
  }
}
