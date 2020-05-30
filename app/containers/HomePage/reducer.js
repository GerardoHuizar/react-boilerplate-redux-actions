import produce from 'immer';
import { handleActions } from 'redux-actions';
import { SET_DATA_FROM_REDDIT_REDUCER } from './constants';

const initialState = {
  dataFromReddit: {},
};

/* eslint-disable default-case, no-param-reassign */
const setDataFromRedditReducer = (state, { payload }) =>
  produce(state, draft => {
    draft.dataFromReddit = payload;
  });

export const homeReducer = handleActions(
  {
    [SET_DATA_FROM_REDDIT_REDUCER]: setDataFromRedditReducer,
  },
  initialState,
);
