import { GamesService } from '../services/games-service.js';
const gamesService = new GamesService();


export class GamesController {

    async filterGames(req, res) {

        try {
            let filters = req.query
            let games = await gamesService.filterGames(filters);
            res.status(200)
            res.json(games)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    async getGamesById(req,res) {
        try{
            let id = req.params.id
            let games = await gamesService.getGamesById(id);
            res.status(200)
            res.json(games)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    postGame(req,res) {
        try {
            let new_game = req.query
            let games = gamesService.postGame(new_game)
            res.status(200)
            res.json({ result: games })

        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }


    deleteGamesById(req,res) {
        try{
            let id = req.params.id
            let games = gamesService.deleteGamesById(id);
            res.status(200)
            res.json({ result: games })
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }


    updateGamesById(req,res) {
        try{
            let id = req.params.id
            let newGameDetails = req.query.game_detail
            let games = gamesService.updateGamesById(id,newGameDetails);
            res.status(200)
            res.json({ result: games })
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

}