import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { extractLocations, getEvents } from './api';
import './nprogress.css';
import './App.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    // selectedLocation: 'all',
    numberOfEvents: 10,
    updateEvents: [],
  }

  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        events = events.slice(0, this.state.eventCount);
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = location === 'all' ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents)
      });
    });
  }

  updateNumberOfEvents(number) {
    this.setState({
      numberOfEvents: number
    });
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    })
    return data;
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
        <NumberOfEvents
          num={this.state.numberOfEvents}
          updateNumberOfEvents={(num) =>
            this.updateNumberOfEvents(num)}
        />
      </div>
    );
  }
}

export default App;

// updateEvents = (location, num) => {
  //   const { eventCount, selectedLocation } = this.state;
  //   if (location) {
  //     getEvents().then((events) => {
  //       const locationEvents = (location === 'all') ?
  //         events :
  //         events.filter((event) => event.location === location);
  //       const eventsToShow = locationEvents.slice(0, eventCount);
  //       this.setState({
  //         events: eventsToShow,
  //         selectedLocation: location
  //       });
  //     });
  //   } else {
  //     getEvents().then((events) => {
  //       const locationEvents = (selectedLocation === 'all') ?
  //         events :
  //         events.filter((event) => event.location === selectedLocation);
  //       const eventsToShow = locationEvents.slice(0, num);
  //       this.setState({
  //         events: eventsToShow,
  //         eventCount: num
  //       });
  //     })
  //   }
  // };
