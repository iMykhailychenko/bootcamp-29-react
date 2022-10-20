import { Component } from 'react';

export class Skills extends Component {
  //   static defaultProps = {
  //     value: 'angular',
  //   };

  state = {
    skill: this.props.value || '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ skill: value });
  };

  handleSumbut = event => {
    event.preventDefault();
    const { list } = this.props;

    console.log(list);
    console.log(this.state);
  };

  render() {
    const { skill } = this.state;
    const { list, name } = this.props;

    return (
      <form onSubmit={this.handleSumbut}>
        <p>{skill}</p>

        {list.map(item => (
          <div key={item.value} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={name || 'skills'}
              id={item.value}
              value={item.value}
              checked={skill === item.value}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor={item.value}>
              {item.title}
            </label>
          </div>
        ))}

        <button type="submit" className="btn  btn-primary mt-5">
          Submit
        </button>
      </form>
    );
  }
}
