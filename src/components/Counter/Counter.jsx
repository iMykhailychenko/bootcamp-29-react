import { useState, useCallback } from 'react';

export const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  // const handleCounter = () => {
  //   setCounterA(prevCounter => {
  //     return prevCounter + 1;
  //   });
  // };

  const handleCounter = useCallback(event => {
    const counterMap = {
      counterA: setCounterA,
      counterB: setCounterB,
    };

    const { name } = event.target;
    counterMap[name](prev => prev + 1);

    // switch (name) {
    //   case 'counterA':
    //     setCounterA(prev => prev + 1);
    //     break;

    //   case 'counterB':
    //     setCounterB(prev => prev + 1);
    //     break;

    //   default:
    //     break;
    // }

    // if (name === 'counterA') {
    //   setCounterA(prev => prev + 1);
    // } else if (name === 'counterB') {
    //   setCounterB(prev => prev + 1);
    // }
  }, []);

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Counter</h2>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Counter A: {counterA}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Counter B: {counterB}
      </p>
      <div className="d-flex align-items-center justify-content-center w-100">
        <button name="counterA" onClick={handleCounter} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Counter A
        </button>

        <button name="counterB" onClick={handleCounter} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Counter B
        </button>
      </div>
    </div>
  );
};
