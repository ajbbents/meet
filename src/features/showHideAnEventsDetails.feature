Feature: Show/Hide an event's details

Scenario: An event element is collapsed by default
Given a list of events has opened
When user scrolls through events
Then all details should be hidden

Scenario: User can expand an event to see its details
Given list of events is open
When user clicks
Then event details will expand

Scenario: User can collapse an event to hide its details
Given event details are expanded
When user clicks
Then event details will collapse