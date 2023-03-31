<h1>Meet App</h1>
<h2>Built With React</h2>

<h2>Links</h2>
<a href="https://ajbbents.github.io/meet/">Live demo</a><br>
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

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.<br>
Given user hasn’t searched for any city<br>
When the user opens the app<br>
Then the user should see the list of upcoming events.<br>
<br>
Scenario 2: User should see a list of suggestions when they search for a city<br>
Given the main page is open<br>
When the user starts typing in the city textbox<br>
Then the user should receive a list of cities (suggestions) that match what they’ve typed<br>
<br>
Scenario 3: User can select a city from the suggested list<br>
Given user was typing “Berlin” in the city textbox<br>
And the list of suggested cities is showing<br>
When the user selects a city (e.g., “Berlin, Germany”) from the list<br>
Then their city should be changed to that city (i.e., “Berlin, Germany”)<br>
And the user should receive a list of upcoming events in that city<br>
<br>
<h4>Feature 2</h4>
As a user, I should be able to show or hide the details of an event so that I can browse the site more easily.

Scenario 1: An event element is collapsed by default<br>
Given a list of events has opened<br>
When user scrolls through events<br>
Then all details should be hidden<br>

Scenario 2: User can expand an event to see its details<br>
Given list of events is open<br>
When user clicks<br>
Then event details will expand<br>

Scenario 3: User can collapse an event to hide its details<br>
Given event details are expanded<br>
When user clicks<br>
Then event details will collapse<br>

<h4>Feature 3</h4>
As a user, I should be able to indicate a number of events in my view of the meet app so that I can either expand or limit my options.

Scenario 1: When a user has not specified a number, ten is the default number<br>
Given the user has not indicated how many events to view<br>
When user opens the app<br>
Then user should see ten events by default<br>

Scenario 2: User can change number of events they want to see<br>
Given user hasn't entered number of events to user input<br>
When user indicates number of events to user input<br>
Then number of displayed events should equal indicated number<br>

<h4>Feature 4</h4>
As a user, I should be able to access events when I’m offline so that I can navigate the app and its data without interruption.

Scenario 1: Show cached data when there’s no internet connection<br>
Given, the app has previously been loaded while online<br>
When the user is offline<br>
Then the events and details are still available<br>

Scenario 2: Show error when user changes the settings (city, time range)<br>
Given, the app was previously loaded with particular settings<br>
When the user changes settings<br>
Then an error message will be shown<br>

<h4>Feature 5</h4>
As a user, I should be able to visualize the data/events in multiple ways so that I can more easily access the information.
Given a city and time range were specified<br>
When the user chooses a chart view<br>
Then the events are plotted in a chart<br>