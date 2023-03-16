import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from 'enzyme';
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('When a user hasn\'t specified a number, 10 is the default number', ({ given, when, then }) => {
    given('the user hasn\'t indicated how many events to view', () => {

    });

    when('user opens the app', () => {

    });

    then(/^user should see (\d+) events by default$/, (arg0) => {

    });
  });

  test('User can change number of events they want to see', ({ given, when, then }) => {
    given('user hasn\'t entered number of events to user input', () => {

    });

    when('user indicates number of events to user input', () => {

    });

    then('number of displayed events should equal indicated number', () => {

    });
  });
});