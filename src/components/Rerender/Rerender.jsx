import { Component, PureComponent } from 'react';

class Button extends PureComponent {
  // shouldComponentUpdate(prevProps) {
  //   if (prevProps.onClick === this.props.onClick) {
  //     return false;
  //   }
  // }

  render() {
    const { onClick } = this.props;
    console.log('Button');

    return (
      <button className="btn btn-outline-light" type="button" onClick={onClick}>
        Click me!
      </button>
    );
  }
}

export class Rerender extends Component {
  state = {
    counter: 0,
  };

  handleCount = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    const { counter } = this.state;
    console.log('Rerender');

    return (
      <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
        <h2>{counter}</h2>

        <Button onClick={this.handleCount} />
      </div>
    );
  }
}
