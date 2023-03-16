import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user hasn’t clicked/asked for an event’s details', () => {

    });

    when('user opens an event', () => {

    });

    then('event details are collapsed', () => {

    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('user clicked on an event to see details', () => {

    });

    when('user clicks', () => {

    });

    then('event details will expand', () => {

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