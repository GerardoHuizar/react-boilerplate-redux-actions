import { put, call, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';

import { SET_DATA_FROM_REDDIT } from './constants';
import {
  setDataFromRedditReducer,
  setDataFromRedditStartWorkflow,
  setDataFromRedditErrorWorkflow,
  setDataFromRedditEndWorkflow,
} from './actions';
import { getDataFromReddit } from '../../services/reddit/index';

function* setDataFromRedditHandler() {
  yield put(setDataFromRedditStartWorkflow());
  try {
    const {
      data: { children },
    } = yield call(getDataFromReddit, 1, 10);

    yield put(setDataFromRedditReducer({ payload: children }));
  } catch (error) {
    yield put(setDataFromRedditErrorWorkflow(error));
  }
  yield put(setDataFromRedditEndWorkflow());
}

export function* mountSaga() {
  try {
  } catch (err) {}
}

export function* mainSaga() {
  yield takeLatest(LOAD_REPOS, mountSaga);
  yield takeLatest(SET_DATA_FROM_REDDIT, setDataFromRedditHandler);
}
