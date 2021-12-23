# PlantiVerse
For this app, make sure you are also running your backend server, which can be found in this repository:

https://github.com/RaquelFraktas/plantiverse-backend

This a single page application that's a social netowrking site for plant owners. 

For this version, the website is best displayed on full screen. To access the site's functionality, you must create an account, or log in. 

As a logged in user, you can:
 * See how many plants you have (in your collection) on your show page
 * See what forums in the message boards you authored 
 * Explore the plant directory
 * Add or remove plants to/from your collection in the directory
 * Look at individual plant info
 * Create topics in the message boards for discussion
 * Comment on the message boards 

<br>

## Setup

This app requires you to set an ENV variable called API. To get this started on your local machine, please create a .env file in your root directory and add the backend URL like this:

```REACT_APP_API=http://localhost:3000```

<br>

## In the project directory, to run this project locally:

### `npm start`

Since the port naturally starts on 3000, which is the same as the rails server, it is recommended that you force the port to run on 3001(or any other of your choosing) in ```package.json```. To do so, in the script section, replace line 26 :

```"start": "react-scripts start",``` with ```"start": "PORT=3001 react-scripts start",``` 


Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.


<br>

### `yarn test`
 
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
