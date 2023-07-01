//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'

globalThis.fetch = fetch

async function fetchURLDataUsingAsync(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}

async function test_fetchURLDataUsingAsync() {
    try {
        var records = await fetchURLDataUsingAsync('https://jsonplaceholder.typicode.com/todos/1');
        console.log(records);
    }
    catch(error) {
        console.error(error.message);
    }
}

test_fetchURLDataUsingAsync();