/* Global Variables */

const APIkey = '8cb231604e5cf6793e2c897a9e3bce6b';
const APIbase = 'api.openweathermap.org';
// API call template: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8cb231604e5cf6793e2c897a9e3bce6b

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Listener for form submit
document.getElementById('generate').addEventListener('click', getInfo => {
    let zip = document.getElementById('zip').value;
    let feelings = document.getElementById('feelings').value;
}

// Get data from API
const getAPI = async (url='', data={}) => {
    const openWeather = await fetch(`${APIbase}/data/2.5/weather?zip=${zip}&APPID=${APIkey}`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    try {
        const weather = await openWeather.json();
        return weather;
    } catch(error) {
        console.log('error', error);
    };
};

// POST data







// Use full data to update UI