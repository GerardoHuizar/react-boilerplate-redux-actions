import { createSelector } from 'reselect';

const selectHome = state => state.home;

export const dataFromRedditSelector = createSelector(
  [selectHome],
  s => s.dataFromReddit.payload,
);
