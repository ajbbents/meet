import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We cannot find the city you are looking for. Please try again.',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    });
    this.props.updateEvents(suggestion);
  };

  handleInputFocus = () => { this.setState({ showSuggestions: true }) };

  render() {
    return (
      <div className='CitySearch'>
        <InfoAlert text={this.state.infoText} />
        <input
          type='text'
          className='city'
          placeholder='City Search'
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={this.handleInputFocus}
        />
        <ul
          className='suggestions'
          style={this.state.showSuggestions ? {} : { display: 'none' }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;