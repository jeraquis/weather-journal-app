// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
import express, { static } from 'express';

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
import { urlencoded, json } from 'body-parser';
app.use(urlencoded({ extended: false }));
app.use(json());

// Cors for cross origin allowance
import cors from 'cors';
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, () => {
    console.log(`Server is on port ${port}`);
});


// Get route
app.get('/all', sending);

function sending(req, res) {
    res.send(projectData);
};

// Post route
app.post('/add', addEntry);

function addEntry(req, res){
    res.send('POST RECEIVED');
};


// Adding a new entry
function addEntry(req, res) {
    projectData.push(req.body);
};