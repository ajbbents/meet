import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
defineFeature(feature, test => {
  let AppWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('a list of events has opened', () => {
      AppWrapper = mount(<App />);
    });

    when('user scrolls through events', () => {

    });

    then('all details should be hidden', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('list of events is open', () => {
      AppWrapper = mount(<App />);
    });

    when('user clicks', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-button').at(0).simulate('click');
    });

    then('event details will expand', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('user clicked on the event to hide details', () => {

    });

    when('user clicks', () => {

    });

    then('event details will collapse', () => {

    });
  });
});