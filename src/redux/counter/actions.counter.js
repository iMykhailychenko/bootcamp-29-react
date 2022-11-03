import { ANDROID_COUNTER, IPHONE_COUNTER } from './types.counter';

export const androidCountAction = value => {
  return { type: ANDROID_COUNTER, payload: value };
};

export const iphoneCountAction = value => {
  return { type: IPHONE_COUNTER, payload: value };
};
