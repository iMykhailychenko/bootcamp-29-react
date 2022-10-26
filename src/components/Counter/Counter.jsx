import { useEffect, useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log(counter);
    return () => {
      console.log('return in useEffect');
    };
  }, [counter]);

  // useEffect(() => {
  //   console.log(counter2);
  // }, [counter2]);
  // prevState.counter2 !== this.state.counter2

  //   handlePlus = () => {
  //     this.setState(prevState => {
  //       return { counter: prevState.counter + 1 };
  //     });
  //   };
  const handlePlus = () => {
    setCounter(prevCounter => {
      return prevCounter + 1;
    });
  };

  const handleMinus = () => {
    setCounter2(prevCounter => {
      return prevCounter + 1;
    });
  };

  //   handleReset = () => {
  //     this.setState({ counter: 0 });
  //   };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Counter</h2>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        counter: {counter}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        counter2: {counter2}
      </p>
      <div className="d-flex align-items-center justify-content-center w-100">
        <button onClick={handlePlus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Plus
        </button>

        <button onClick={handleMinus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Minus
        </button>

        <button onClick={handleReset} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Reset
        </button>
      </div>
    </div>
  );
};

// export class Counter extends Component {
//   state = {
//     counter: 0,
//   };

//   handlePlus = () => {
//     this.setState(prevState => {
//       return { counter: prevState.counter + 1 };
//     });
//   };

//   handleMinus = () => {
//     this.setState(prevState => {
//       return { counter: prevState.counter - 1 };
//     });
//   };

//   handleReset = () => {
//     this.setState({ counter: 0 });
//   };

//   render() {
//     const { counter } = this.state;

//     return (
//       <div className="mb-5 p-5 text-white bg-dark rounded-3">
//         <h2 className="text-center">Counter</h2>
//         <p className="text-center my-5" style={{ fontSize: 80 }}>
//           {counter}
//         </p>
//         <div className="d-flex align-items-center justify-content-center w-100">
//           <button onClick={this.handlePlus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//             Plus
//           </button>

//           <button onClick={this.handleMinus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//             Minus
//           </button>

//           <button onClick={this.handleReset} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//             Reset
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
