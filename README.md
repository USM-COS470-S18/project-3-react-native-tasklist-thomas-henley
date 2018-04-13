COS 470 Project 3
Tasks
Thomas Henley

USE:
This is a simple tasklist application. The user logs in with email and password and the app pulls their tasklist from the data stored on Firebase. The user can click the "Add" button in the corner to create a new task, or click on any currently existing task to edit or delete it.

IMPORTANT: The app requires user authentication, but I didn't add a signup feature yet. Current users are:

email: t4.crow@gmail.com
password: thomas

email: houser@maine.edu
password: password

The App uses Redux for maintaining state, React-Native-Router-Flux for navigation, Redux Thunk middleware for some asynchronous dispatch functionality, Firebase for user authentication and data storage, and Lodash to deal with some of Redux's finer idiosynchrocies.

Note: the checkbox feature on the List screen is currently buggy. It correctly shows whether the task is complete or not, but does not respond to touch.

REFLECTIONS:
React is a mighty beast. Through the process of building this app (which I needlessly made more complicated), it became very apparent how React-Native offers some incredible modularity and flexibility while also being finnicky, untamed, and sometimes a bit janky. Using Node to install packages as needed is a new experience for me, and I like the variety it adds, but many common packages use features that have been deprecated already. Even some React-Native libraries use deprecated markers like "componentWillMount." I'm sure experience will render these little issues moot, but as a fledgling developer it can be confusing to try to work with so many moving pieces and thousands of warnings through the debugging process.
