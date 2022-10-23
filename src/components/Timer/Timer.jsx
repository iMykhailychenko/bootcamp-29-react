import { Component } from 'react';

import { formatTime } from 'helpers/time';

const ONE_SECOND = 1000;

export class Timer extends Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, ONE_SECOND);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
        <h2 className="h1 m-5">{formatTime(time)}</h2>
      </div>
    );
  }
}
