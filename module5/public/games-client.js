import {DisplayContorller} from "./games-ui-script.js";

const displayController = new DisplayContorller()






const fetchGameById = async () =>{
    const gameId = document.getElementById('gameID').value;
    const apiUrl = `http://localhost:3000/api/games/${gameId}`;
    const headers = {
        'accept': 'application/json',
    };
    try {
        const response = await fetch(apiUrl, {headers});
        if (!response.ok) {
            throw new Error('Network response was not OK.');
        }
        const games = await response.json();
        displayController.displayGameDetails(games);
    } catch (error) {
        console.error('Error fetching games with query parameters:', error);
    }
}

async function fetchGamesWithQuery() {
    const publisher = document.getElementById('publisher').value;
    const genre = document.getElementById('genre').value;
    const title = document.getElementById('title').value;
    const apiUrl = `http://localhost:3000/api/games?publisher=${publisher}&genre=${genre}&title=${title}`;
    const headers = {
        'accept': 'application/json',
    };

    try {
        const response = await fetch(apiUrl, {headers});
        if (!response.ok) {
            throw new Error('Network response was not OK.');
        }
        const games = await response.json();
        displayController.displayGameDetails(games);
    } catch (error) {
        console.error('Error fetching games with query parameters:', error);
    }
}
