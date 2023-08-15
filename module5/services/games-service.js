import apiInfo from "./api-key.js"
export class GamesService {

    #games;

    async getGames() {
        const url = apiInfo.baseUrl + '/games';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiInfo.apiKey,
                'X-RapidAPI-Host': apiInfo.apiHost
            }
        };
        const response = await fetch(url, options);
        let games = await response.json();
        this.#games = games;
        return games;
    }

    async filterGames(filters){
        if(!this.#games){
            await this.getGames()
        }
        let filteredGames = this.#games
        // console.log(filters)
        if (filters.publisher)
            filteredGames = filteredGames.filter(game => game.publisher.toLowerCase().includes(filters.publisher.toLowerCase()) );
        if (filters.genre)
            filteredGames = filteredGames.filter(game => game.genre.toLowerCase() === filters.genre.toLowerCase());
        if (filters.title)
            filteredGames = filteredGames.filter(game => game.title.toLowerCase().includes(filters.title.toLowerCase()) );
        // console.log(filteredGames)
        return filteredGames;
    }


    async getGamesById(id){
        if(!this.#games){
            await this.getGames()
        }
        let filteredGames = this.#games
        console.log(id)
        if(id)
            // filteredGames = filteredGames.find(game=>game.id==id);
            filteredGames = filteredGames.filter(game => game.id == id);
        return filteredGames;
    }

    postGame(new_game){
        let game_id = new_game.id
        let game_title = new_game.title
        let thumbnail = new_game.thumbnail
        let short_description = new_game.description
        let genre = new_game.genre
        let game_url = new_game.game_url
        let platform = new_game.platform
        let publisher = new_game.publisher
        let developer = new_game.developer
        let release_date = new_game.release_date
        let freetogame_profile_url = new_game.freetogame_profile_url

        let added_game = {
            "id": game_id,
            "title": game_title,
            "thumbnail": thumbnail,
            "short_description": short_description,
            "game_url": game_url,
            "genre": genre,
            "platform": platform,
            "publisher": publisher,
            "developer": developer,
            "release_date": release_date,
            "freetogame_profile_url":freetogame_profile_url
        }

        console.log(added_game)
        this.#games.push(added_game)
        return added_game
    }

    deleteGamesById(id){
        let games = this.#games
        let gameByID = games.find(game=>game.id == id);
        games = games.filter((game) => game!== gameByID)
        return games
    }

    updateGamesById(id,newGameDetails){
        let games = this.#games
        let gameByID = games.findIndex(game=>game.id == id);
        console.log(newGameDetails)
        games[gameByID] = (newGameDetails) ;
        return games
    }
}

