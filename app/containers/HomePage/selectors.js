/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = state => state.home || initialState;

export { selectHome };
