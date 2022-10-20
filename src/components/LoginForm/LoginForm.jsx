import { Component } from 'react';

import { login } from 'helpers/login';


export class LoginForm extends Component {
  state = {
    email: '',
    password: '',

    iphone: false,
    android: false,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = event => {
    const { name } = event.target;
    this.setState(state => {
      return { [name]: !state[name] };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    login();
  };

  render() {
    const { email, password, iphone, android } = this.state;
    return (
      <form className="w-25" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="text"
            className="form-control"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="iPhone"
            name="iphone"
            checked={iphone}
            onChange={this.handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="iPhone">
            iPhone
          </label>
        </div>

        <div className="mb-3 form-check">
          <input
            name="android"
            type="checkbox"
            className="form-check-input"
            id="Android"
            checked={android}
            onChange={this.handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="Android">
            Android
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
