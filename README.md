<h1>Meet App</h1>
<h2>Built With React</h2>

<h2>Links</h2>
<a href="https://ajbbents.github.io/meet/">Live demo</a>
<a href="https://github.com/ajbbents/meet">GitHub repository</a>

<h2>My Role</h2>
Full-Stack Web Developer

<h2>Objective</h2>
To build a serverless, progressive web application (PWA) with React using test-driven development (TDD) and behavior-driven development (BDD) techniques. This app uses the Google Calendar API to fetch upcoming events.

<h2>Features</h2>
<h3>Key Features</h3>
<ul>
<li>Filter events by city.</li>
<li>Show/hide event details.</li>
<li>Specify number of events.</li>
<li>Use the app when offline.</li>
<li>Add an app shortcut to the home screen.</li>
<li>View a chart showing the number of upcoming events by city.</li>
</ul>
<h3>User Stories</h3>
<h4>Feature 1</h4>
As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see the list of upcoming events.

Scenario 2: User should see a list of suggestions when they search for a city
Given the main page is open
When the user starts typing in the city textbox
Then the user should receive a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list
Given user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

<h4>Feature 2</h4>
As a user, I should be able to show or hide the details of an event so that I can browse the site more easily.

Scenario 1: An event element is collapsed by default
Given a list of events has opened
When user scrolls through events
Then all details should be hidden

Scenario 2: User can expand an event to see its details
Given list of events is open
When user clicks
Then event details will expand

Scenario 3: User can collapse an event to hide its details
Given event details are expanded
When user clicks
Then event details will collapse

<h4>Feature 3</h4>
As a user, I should be able to indicate a number of events in my view of the meet app so that I can either expand or limit my options.

Scenario 1: When a user has not specified a number, ten is the default number
Given the user has not indicated how many events to view
When user opens the app
Then user should see ten events by default

Scenario 2: User can change number of events they want to see
Given user hasn't entered number of events to user input
When user indicates number of events to user input
Then number of displayed events should equal indicated number

<h4>Feature 4</h4>
As a user, I should be able to access events when I’m offline so that I can navigate the app and its data without interruption.

Scenario 1: Show cached data when there’s no internet connection
Given, the app has previously been loaded while online
When the user is offline
Then the events and details are still available

Scenario 2: Show error when user changes the settings (city, time range)
Given, the app was previously loaded with particular settings
When the user changes settings
Then an error message will be shown

<h4>Feature 5</h4>
As a user, I should be able to visualize the data/events in multiple ways so that I can more easily access the information.
Given a city and time range were specified
When the user chooses a chart view
Then the events are plotted in a chart