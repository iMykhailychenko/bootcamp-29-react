import { Component } from 'react';

import { Button } from 'components/Button';
import { formatTime } from 'helpers/time';
import { IoStopOutline, IoPlayOutline } from 'react-icons/io5';

const ONE_SECOND = 1000;

export class Timer extends Component {
  state = {
    time: new Date(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <>
        <p className="h1 mb-4 text-center">{formatTime(time)}</p>

        <div className="d-flex justify-content-center">
          <Button className="btn-primary btn-lg mx-2">
            <IoPlayOutline />
          </Button>

          <Button className="btn-danger btn-lg mx-2">
            <IoStopOutline />
          </Button>
        </div>
      </>
    );
  }
}
