import { Component } from 'react';

/**
 * class Component {
 *  constructor() {
 *    this.prevState = this.state
 *  }
 *
 *  prevState = { counter: 1 }
 *
 *  setState(callback) {
 *   //...
 *   const newState = callback(thsi.prevState)
 *
 *   this.prevState = newState
 *
 *   // re-render
 *   this.render()
 *  }
 *
 */

export class Counter extends Component {
  state = {
    counter: 0,
  };

  handlePlus = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  handleMinus = () => {
    this.setState(prevState => {
      const result = prevState.counter - 1;
      if (result < 0) {
        return prevState;
      }

      return { counter: result };
    });
  };

  handleReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {counter}
        </p>
        <div className="d-flex align-items-center justify-content-center w-100">
          <button onClick={this.handlePlus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
            Plus
          </button>

          <button onClick={this.handleMinus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
            Minus
          </button>

          <button onClick={this.handleReset} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

// export const Counter = () => {
//   const handlePlus = () => {
//     counter += 1;
//   };

//   const handleMinus = () => {
//     counter -= 1;
//   };

//   return (
//     <div className="mb-5 p-5 text-white bg-dark rounded-3">
//       <h2 className="text-center">Counter</h2>
//       <p className="text-center my-5" style={{ fontSize: 80 }}>
//         {counter}
//       </p>

//       <div className="d-flex align-items-center justify-content-center w-100">
//         <button onClick={handlePlus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Plus
//         </button>

//         <button onClick={handleMinus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Minus
//         </button>
//       </div>
//     </div>
//   );
// };
