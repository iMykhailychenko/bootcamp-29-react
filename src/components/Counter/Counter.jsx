import { Component } from 'react';

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
      return { counter: prevState.counter - 1 };
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
