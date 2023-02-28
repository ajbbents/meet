import React, { Component } from "react";

class Event extends Component {
  state = { collapsed: true };
  toggleDetails = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className='event'>
        <h1 className='summary'>
          {event.summary}
        </h1>
      </div>
    )
  };
}
export default Event;