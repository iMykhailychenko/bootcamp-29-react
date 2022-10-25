import { Component } from 'react';

import { Button } from '../../Button';

export class SearchPosts extends Component {
  state = {
    value: '',
  };

  // static getDerivedStateFromProps(nexProps, prevState) {
  //   console.log(nexProps, prevState);
  //   if (nexProps.defaulValue && prevState.value === '') {
  //     return { value: nexProps.defaulValue };
  //   }
  // }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="input-group mb-3">
        <input
          value={value}
          onChange={this.handleChange}
          type="text"
          className="form-control"
          placeholder="Type to search..."
        />
        <Button onClick={this.handleSubmit}>Search</Button>
      </div>
    );
  }
}
