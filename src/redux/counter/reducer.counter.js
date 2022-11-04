import { counterInitialState } from './initial-state.counter';
import { ANDROID_COUNTER, IPHONE_COUNTER } from './types.counter';

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case ANDROID_COUNTER:
      return { ...state, android: state.android + action.payload }; // -> { iphone: 0, android: 1 }

    case IPHONE_COUNTER:
      return { ...state, iphone: state.iphone + action.payload }; // -> { iphone: 1, android: 0 }

    default:
      return state;
  }
};
