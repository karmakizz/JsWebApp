// URL of the JokeAPI
const jokeAPIUrl = 'https://v2.jokeapi.dev/joke/Programming';

// The button and the paragraph for displaying the joke
const getJokeButton = document.getElementById('get-joke');
const jokeDisplay = document.getElementById('joke-display');

// Event listener for the button
getJokeButton.addEventListener('click', async () => {
    try {
        // Fetch joke data from the JokeAPI
        const response = await fetch(jokeAPIUrl);
        const data = await response.json();

        // Check if the joke is single-line or two-part
        if (data.type === 'single') {
            jokeDisplay.textContent = data.joke;
        } else if (data.type === 'twopart') {
            jokeDisplay.textContent = `${data.setup} - ${data.delivery}`;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeDisplay.textContent = 'Sorry, something went wrong.';
    }
});
