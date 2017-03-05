import { put } from 'redux-saga/effects';
import DrinkupActions from '../Redux/DrinkupRedux';
import { membersData } from '../Fixtures/drinkupMembers';
import bars from '../Fixtures/bars.json';

export function* getBar({ barId }) {
  try {
    const drinkupBar = bars.find(bar => bar.id === barId);
    yield put(DrinkupActions.barRequestSuccesful(drinkupBar));
  } catch (error) {
    yield put(DrinkupActions.barRequestFailure(error));
  }
}

export function* getMembers({ barId }) {
  try {
    const drinkupBar = membersData.find(({ bar }) => bar === barId);
    yield put(DrinkupActions.membersRequestSuccesful(drinkupBar.members));
  } catch (error) {
    yield put(DrinkupActions.membersRequestFailure(error));
  }
}
