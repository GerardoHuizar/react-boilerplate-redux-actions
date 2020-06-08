import {
  SET_DATA_FROM_REDDIT,
  SET_DATA_FROM_REDDIT_REDUCER,
  SET_DATA_FROM_REDDIT_START_WORKFLOW,
  SET_DATA_FROM_REDDIT_ERROR_WORKFLOW,
  SET_DATA_FROM_REDDIT_END_WORKFLOW,
} from './constants';

/**
 * SAGAS
 */
export const setDataFromReddit = payload => ({
  type: SET_DATA_FROM_REDDIT,
  payload,
});
export const setDataFromRedditStartWorkflow = payload => ({
  type: SET_DATA_FROM_REDDIT_START_WORKFLOW,
  payload,
});
export const setDataFromRedditErrorWorkflow = payload => ({
  type: SET_DATA_FROM_REDDIT_ERROR_WORKFLOW,
  payload,
});
export const setDataFromRedditEndWorkflow = payload => ({
  type: SET_DATA_FROM_REDDIT_END_WORKFLOW,
  payload,
});

/**
 * REDUCERS
 */

export const setDataFromRedditReducer = payload => ({
  type: SET_DATA_FROM_REDDIT_REDUCER,
  payload,
});
