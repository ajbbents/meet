Feature: Specify number of events

Scenario: When a user has not specified a number, ten is the default number
Given the user has not indicated how many events to view
When user opens the app
Then user should see ten events by default

Scenario: User can change number of events they want to see
Given user hasn't entered number of events to user input
When user indicates number of events to user input
Then number of displayed events should equal indicated number