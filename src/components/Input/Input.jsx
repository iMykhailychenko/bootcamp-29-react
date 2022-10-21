import classNames from 'classnames';
import { Component } from 'react';

export class Input extends Component {
  state = {
    input: '',
    isActive: false,
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ input: value });
  };

  handleCheckboxChange = () => {
    this.setState(prevState => {
      return { isActive: !prevState.isActive };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { isActive } = this.state;

    if (isActive) {
      console.log(this.state);
      this.setState({ input: '', isActive: false });
    }
  };

  render() {
    const { input, isActive } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Input value: {input}</p>

        <label>
          Controled input
          <br />
          <input type="text" value={input} onChange={this.handleChange} />
        </label>

        <br />
        <br />

        <label>
          <input type="checkbox" checked={isActive} onChange={this.handleCheckboxChange} />
          Controled checkbox
        </label>

        <br />

        <button
          className={classNames(isActive ? 'btn btn-primary' : 'btn btn-secondary')}
          disabled={!isActive}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}
