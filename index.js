// URL of the JokeAPI
const jokeAPIBaseUrl = 'https://v2.jokeapi.dev/joke/';

// The button and the paragraph for displaying the joke
const getJokeButton = document.getElementById('get-joke');
const jokeDisplay = document.getElementById('joke-display');
const categoryInput = document.getElementById('category');

// Event listener for the button
getJokeButton.addEventListener('click', async () => {
    const category = categoryInput.value.trim(); // Getting the value from the input field
    if (category === "") {
        jokeDisplay.textContent = 'Please enter a category!';
        return;
    }
    
    try {
        // Fetch joke data from the JokeAPI
        const response = await fetch(`${jokeAPIBaseUrl}${category}`);
        const data = await response.json();
        // Check if the joke is single-line or two-part
        if (data.type === 'single') {
            jokeDisplay.textContent = data.joke;
        } else if (data.type === 'twopart') {
            jokeDisplay.textContent = `${data.setup} - ${data.delivery}`;
        }else{
            jokeDisplay.textContent = 'Sorry, something went wrong.';
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeDisplay.textContent = 'Sorry, something went wrong.';
    }
});

//using promises
fetch(`${jokeAPIBaseUrl}Any`)
    .then(response => response.json())
    .then(data => console.log('Fetched joke:', data.joke))
    .catch(error => console.error('Error fetching joke:', error));

//using async/await
async function fetchJoke(category) {
    try {
        const response = await fetch(`${jokeAPIBaseUrl}${category}`);
        const data = await response.json();
        console.log('Fetched joke:', data.joke);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

//Demonstrating how non-blocking code works
console.log('1.Start fetching joke');
setTimeout(() => {
    console.log('2. Simulated delay');
    fetch(`${jokeAPIBaseUrl}Any`)
        .then(response => response.json())
        .then(data => console.log('3. Fetched joke:', data.joke))
        .catch(error => console.error('Error fetching joke:', error));
    console.log('4. Fetching joke completed');
}, 1000);

import { fetchJoke } from './api.js';
import { displayJoke } from './dom.js';

