const url = 'https://official-joke-api.appspot.com/random_joke';
const jokeButtonEl = document.getElementById('jokeButton');
const jokeDisplayEl = document.getElementById('jokeDisplay');
const copyButtonEl = document.getElementById('copyButton');


const fetchJokes = async () => {
    try {
        const response =  await fetch(`${url}`);
        const joke = await response.json();
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        jokeDisplayEl.textContent = joke.setup + ' - ' + joke.punchline;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        jokeDisplayEl.textContent = 'Failed to fetch a joke';
    }  
}

const copyJokeToClipboard = () => {
    const jokeText = jokeDisplayEl.innerText;

    navigator.clipboard.writeText(jokeText)
        .then(() => alert("Text copied to clipboard!"))
        .catch(err => alert("Failed to copy text: " + err));


};

jokeButtonEl.addEventListener('click', fetchJokes);

copyButtonEl.addEventListener('click', copyJokeToClipboard);