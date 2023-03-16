Feature: Show/Hide an event's details

Scenario: An event element is collapsed by default
Given user hasn’t clicked/asked for an event’s details
When user opens an event
Then event details are collapsed

Scenario: User can expand an event to see its details
Given user clicked on an event to see details
When user clicks
Then event details will expand

Scenario: User can collapse an event to hide its details
Given user clicked on the event to hide details
When user clicks
Then event details will collapse