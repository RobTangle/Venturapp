# Venturapp - Roberto Augusto Spinelli Alcalde

This is a full-stack sample project made by Roberto Spinelli.

This repository is deployed in this URL: https://venturapp-robtangle.vercel.app/

<hr>

### The directions for the creation of this repository where the following:

<quote>

Create an API endpoint with Express.js to send this data (convert it to an object):

name: Trip 1 | price: 1000 | currency: EUR

name: Trip 2 | price: 1000 | currency: USD

name: Trip 3 | price: 3000 | currency: EUR

Consume this API in a react application where you show the info in a row of cards.

Optional: use Typescript in the React Application.

The card should be a title with the name, and the price at the bottom of the card. Also add a box-shadow of your liking to the card.
</quote>
<br>

<hr>

## Main Techs used:

#### Front-end: JavaScript, ReactJS, CSS, axios

#### Back-end: TypeScript, Express, Mongoose, MongoDB

<hr>

## How to run the application

NOTE 1: This project is divided in to main folders: "client" and "api".
The "client" folder is responsible of running the front-end react application.
The "api" folder is responsible of running the Express-Mongo back-end application.
<br>
NOTE 2: This project uses a .env file for some configurations of the Database. You should provide your one ones for the variables "MONGO_DB_URI" and "PORT".

#### To run the back-end, from the root repository folder, run the following commands in your terminal:

<code>
cd api <br>
npm run dev 
</code>

<br>

#### To run the React front-end application, from the root repository folder, run the following commands in your terminal:

<code>
cd client <br>
npm run start 
</code>
<br>
<br>
<hr>
<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
