import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('Event /> component', () => {
  let EventWrapper;
  const event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test('renders the component', () => {
    expect(EventWrapper).toBeDefined();
  });

  test('renders the summary as an h1', () => {
    const summary = EventWrapper.find('h1.summary');
    expect(summary).toHaveLength(1);
    expect(summary.text()).toBe(event.summary);
  });

})