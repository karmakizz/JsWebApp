export function displayJoke(jokeElement, jokeData) {
    jokeElement.textContent = jokeData.type === "single"
        ? jokeData.joke
        : `${jokeData.setup} - ${jokeData.delivery}`;
}
