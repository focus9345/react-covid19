# Covid 19 Stats React App

This web application intends to display changing report statistics on the covid 19 statistics. The app takes API reports from [covidtracking](https://api.covidtracking.com/v1/us/daily.json) and uses the d3.js library to display the statistics.

[Live Demo](https://fetchcovidreact.herokuapp.com/)

**The application uses the following technology:**
* React 16.13
* Typescript 3.7
* d3.js 6.3
* Node.js 13.12
* Bootstrap 4.5
* node-sass 4.14

The app is still in the **development phase** and has about _65%_ completed. 

## Tasks

- [x] Setup Fetch to API Json using typescript
- [x] Display seven days worth of results
- [x] Setup a D3 Bargraph to display the last seven days worth of positive cases in the United States
- [ ] Setup a D3 pie graph of yesterdays negative, positive, us population
- [ ] Setup a D3 line graph of new positive cases over the last seven days
- [ ] Review Page Design for responsiveness, browser test, lighthouse
- [ ] Test if data fails to load, display something to end users



To install node to run this application locally, please visit: [Node.js](https://nodejs.org/en/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
