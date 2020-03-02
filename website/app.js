//import { response } from "express";

/* Global Variables */

const APIkey = '8cb231604e5cf6793e2c897a9e3bce6b';
const APIbase = 'http://api.openweathermap.org/data/2.5/weather';
// API call template: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8cb231604e5cf6793e2c897a9e3bce6b


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Listener for form submit
document.getElementById('generate').addEventListener('click', testFunc);


function testFunc() {
    console.log('click');
    postIt()
    .then(updateUI)
}


// Get data from API
const getAPI = async (zip) => {
    const openWeather = await fetch(`${APIbase}?zip=${zip}&APPID=${APIkey}`, {
        body: JSON.stringify(),
    });

    try {
        const weather = await openWeather.json();
        const temp = weather.main.temp;
        console.log(temp);
        return temp;
    } catch(error) {
        console.log('error', error);
    };
};

// POST data

const postData = async (url = '/add', data = {}) => {
    console.log(data);
    const response = await fetch (url, {
        method:'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newEntry = await response.json();
        console.log(newEntry);
        return newEntry;
    } catch(error) {
        console.log('error', error);
    }
}

const postIt = async() => {
    let zip = document.getElementById('zip').value;
    let feelings = document.getElementById('feelings').value;
    let gatherData = await getAPI(zip);
    console.log(gatherData);
    postData('/add', {zip:zip, feelings:feelings, date:newDate, weather:gatherData});
};

// GET full data
const getFullData = async() => {
    const reqFull = await fetch('all');
    try {
        return reqFull;
    } catch(error) {
        console.log('error', error);
    };
};


// Use full data to update UI
const updateUI = async () => {
    const everything = await getFullData();
    try {
        // change UI

        

    } catch(error) {
        console.log('error', error);
    };
};