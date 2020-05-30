import produce from 'immer';

import homeReducer from '../reducer';
import { setDataFromRedditHandler } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      dataFromReddit: [],
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.dataFromReddit = [];
    });

    expect(homeReducer(state, setDataFromRedditHandler())).toEqual(
      expectedResult,
    );
  });
});
