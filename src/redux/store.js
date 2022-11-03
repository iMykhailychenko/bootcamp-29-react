import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';

import { counterInitialState } from './counter/initial-state.counter';
import { counterReducer } from './counter/reducer.counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const initialState = {
  counter: counterInitialState,
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, initialState, enhancer);
