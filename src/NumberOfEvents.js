import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { num: 10 };

  changeNum = (value) => {
    this.setState({ num: value });
    this.props.updateNumberOfEvents(value);
    if (value < 1 || value > 10) {
      this.setState({ errorText: 'Please select a value between 1 and 10' });
    } else this.setState({ errorText: '' });
  };

  componentDidMount() {
    this.setState({ num: this.props.num || 10 });
  }

  render() {
    const { num } = this.state;

    return (
      <div>
        <label>
          Number of Events
          <input
            className='num'
            type='number'
            value={num}
            onChange={(event) => {
              this.changeNum(event.target.value);
            }}
          >
          </input>
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;