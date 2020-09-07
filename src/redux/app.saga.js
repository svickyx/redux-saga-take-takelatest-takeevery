import { takeLatest, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('I am incremented');
  yield delay(3000);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  yield takeLatest('INCREMENT', onIncrement);
}

---------{take} only version---------
import { take } from 'redux-saga/effects';

export function* incrementSaga() {
  yield take('INCREMENT');
  console.log('I am incremented');
}

---------{takeEvery} version---------
import { takeEvery } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('I am incremented');
}

export function* incrementSaga() {
  yield takeEvery('INCREMENT', onIncrement);
}


