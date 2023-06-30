
import('node-fetch')
globalThis.fetch = fetch;

function randomDelay() {
    return new Promise((resolve) => {
        const delay = Math.random() * 1000;
        setTimeout(resolve, delay);
    });
}

async function fetchURLData(url) {
    try {
        await randomDelay(); // Simulate a random delay before making the request
        const response = await fetch(url);
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}

async function fetchMultipleURLData(urls) {
    try {
        const promises = urls.map(url => fetchURLData(url));
        const responses = await Promise.all(promises);
        return responses;
    } catch (error) {
        throw new Error(`Error fetching multiple URLs: ${error.message}`);
    }
}

// Testing with individual URL
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

// Testing with async/await and multiple URLs
async function testFetchURLData(url) {
    try {
        const data = await fetchURLData(url);
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

testFetchURLData('https://jsonplaceholder.typicode.com/todos/1');

// Testing with multiple URLs
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/posts/1'
];

fetchMultipleURLData(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
