import { combineReducers } from 'redux';

import { productReducer } from './productReducer';

export const combinedReducers = combineReducers({
  product: productReducer
});

export type State = ReturnType<typeof combinedReducers>;