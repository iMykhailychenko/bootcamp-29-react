import { useDispatch, useSelector } from 'react-redux';
import { androidCountAction, iphoneCountAction } from 'redux/counter/actions.counter';

export const CounterReduxPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  console.log(counter);

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
