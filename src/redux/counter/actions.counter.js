import { ANDROID_COUNTER, IPHONE_COUNTER } from './types.counter';

export const androidCountAction = payload => {
  return { type: ANDROID_COUNTER, payload };
};

export const iphoneCountAction = payload => {
  return { type: IPHONE_COUNTER, payload };
};
