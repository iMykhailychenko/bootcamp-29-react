import { useReducer } from 'react';

// import { useCounter } from './hook';
const IPHONE = 'IPHONE';
const ANDROID = 'ANDROID';

const reducer = (prevState, action) => {
  console.log(action);
  switch (action.type) {
    case ANDROID:
      return { ...prevState, android: prevState.android + action.payload };

    case IPHONE:
      return { ...prevState, iphone: prevState.iphone + action.payload };

    default:
      return prevState;
  }

  // if (action.type === 'ANDROID') {
  //   return { ...prevState, android: prevState.android + 1 };
  // }

  // if (action.type === 'IPHONE') {
  //   return { ...prevState, iphone: prevState.iphone + 1 };
  // }

  // return prevState;
};

export const CounterPage = () => {
  // const { android, iphone, handleUpdate } = useCounter();
  const [state, dispatch] = useReducer(reducer, { android: 0, iphone: 0 });

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Android: {state.android}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        iPhone: {state.iphone}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          type="button"
          name="android"
          className="btn p-3 btn-outline-light w-25 mx-2"
          onClick={() => dispatch({ type: ANDROID, payload: 10 })}
        >
          Android
        </button>

        <button
          type="button"
          name="iphone"
          className="btn p-3 btn-outline-light w-25 mx-2"
          onClick={() => dispatch({ type: IPHONE, payload: 5 })}
        >
          Iphone
        </button>
      </div>
    </div>
  );
};
