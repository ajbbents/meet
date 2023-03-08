import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
// import App from '../App';
// import EventList from '../EventList';
// import { mockData } from '../mock-data';
// import { extractLocations, getEvents } from '../api';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateEvents={() => { }} />
    );
  });

  test('renders the component', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
  });

  test('default number of events is 10', () => {
    expect(NumberOfEventsWrapper.find('input.num').prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('num')).toBe(10);
  });

  test('user can change number of events', () => {
    expect(NumberOfEventsWrapper.state('num')).toBe(10);
    NumberOfEventsWrapper.find('input.num').simulate('change', {
      target: { value: 3 }
    });
    expect(NumberOfEventsWrapper.state('num')).toBe(3);
  });

  test('rendered number of events is accurate to user input', () => {
    const NumberOfEventsWrapperWithProp = shallow(
      <NumberOfEvents num={7} updateEvents={() => { }} />
    );
    expect(NumberOfEventsWrapperWithProp.state('num')).toBe(7);
  });
});

// describe('<NumberofEvents /> integration', () => {
//   test('App', () => {
//     const AppWrapper = mount(<App />);

//     AppWrapper.unmount();
//   });
// })