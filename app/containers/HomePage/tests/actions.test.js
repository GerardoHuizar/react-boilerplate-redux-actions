import { SET_DATA_FROM_REDDIT } from '../constants';

import { setDataFromRedditHandler } from '../actions';

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = {
        type: SET_DATA_FROM_REDDIT,
        dataFromReddit: [],
      };

      expect(setDataFromRedditHandler()).toEqual(expectedResult);
    });
  });
});
