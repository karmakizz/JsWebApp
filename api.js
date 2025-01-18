export async function fetchJoke(category) {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
    return response.json();
}
