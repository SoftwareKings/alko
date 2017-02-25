import { put } from 'redux-saga/effects';
import AlertActions from '../Redux/AlertRedux';
import alerts from '../Fixtures/alerts.json';

export function* getAlerts() {
  try {
    yield put(AlertActions.alertsSuccess(alerts));
  } catch (error) {
    yield put(AlertActions.alertsFailure(error));
  }
}
