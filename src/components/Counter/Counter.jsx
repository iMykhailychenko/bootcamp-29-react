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

const mobilePhones = [
  { title: 'iPhone', name: 'iphone' },
  { title: 'Android', name: 'android' },
];

export class Counter extends Component {
  state = {
    iphone: 0,
    android: 0,
  };

  handleChange = event => {
    const { name } = event.target;

    this.setState(state => {
      return { [name]: state[name] + 1 };
    });
  };

  render() {
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        {mobilePhones.map(item => (
          <p key={item.name} className="text-center my-5" style={{ fontSize: 80 }}>
            {item.title} - {this.state[item.name]}
          </p>
        ))}

        <div className="d-flex align-items-center justify-content-center w-100">
          {mobilePhones.map(item => (
            <button
              key={item.name}
              name={item.name}
              type="button"
              onClick={this.handleChange}
              className="btn p-3 btn-outline-light w-25 mx-2"
            >
              {item.title}
            </button>
          ))}
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
