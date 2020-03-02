// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, () => {
    console.log(`Server is on port ${port}`);
});


// Get route
app.get('all', sending);

function sending(req, res) {
    res.send(projectData);
};

// Post route
app.post('add', callBack);

function callBack(req, res) {
    some fucking thing
}


// Adding a new entry
const data = [];

app.post('journal', addEntry);

function addEntry(req, res) {
    data.push(req.body);
};