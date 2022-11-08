import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { androidCountAction, iphoneCountAction } from 'redux/counter/actions.counter';
import { selectCounter } from 'redux/counter/selectors.counter';

export const CounterReduxPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  // ---------------
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  const handleClickAndroid = () => {
    dispatch(androidCountAction(10) /* -> { type: ANDROID_COUNTER, payload: 10 } */);
  };

  const handleClickIphone = () => {
    dispatch(iphoneCountAction(10));
  };

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Android: {counter.android}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        iPhone: {counter.iphone}
      </p>

      <button className="btn btn-primary" type="button" onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? 'Open' : 'Close'}
      </button>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          onClick={handleClickAndroid}
          type="button"
          name="android"
          className="btn p-3 btn-outline-light w-25 mx-2"
        >
          Android
        </button>

        <button
          onClick={handleClickIphone}
          type="button"
          name="android"
          className="btn p-3 btn-outline-light w-25 mx-2"
        >
          iPhone
        </button>
      </div>
    </div>
  );
};
