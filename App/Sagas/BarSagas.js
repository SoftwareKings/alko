import { put } from 'redux-saga/effects';
import BarActions from '../Redux/BarRedux';
import bars from '../Fixtures/bars.json';

export function* getBars() {
  try {
    yield put(BarActions.barsRequestSuccess(bars));
  } catch (error) {
    yield put(BarActions.barsRequestFailure(error));
  }
}
