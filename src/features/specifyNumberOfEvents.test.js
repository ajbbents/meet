import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from 'enzyme';
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('When a user has not specified a number, ten is the default number', ({ given, when, then }) => {
    given('the user has not indicated how many events to view', () => {

    });

    when('user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('user should see ten events by default', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(10);
    });
  });

  test('User can change number of events they want to see', ({ given, when, then }) => {
    given('user hasn\'t entered number of events to user input', () => {
      AppWrapper = mount(<App />);
    });

    when('user indicates number of events to user input', () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
      const eventObject = { target: { value: 7 } };
      NumberOfEventsWrapper.find('.num').simulate('change', eventObject);
    });

    then('number of displayed events should equal indicated number', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(7);
    });
  });
});