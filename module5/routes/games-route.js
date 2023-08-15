import { Router } from 'express';
var router = Router();

import { GamesController } from '../controllers/games-controller.js'
const gamesController = new GamesController();

router.get("/games", function (req, res) {
    gamesController.filterGames(req,res)
})

router.get("/games/:id", function (req, res) {
    gamesController.getGamesById(req,res)
})

router.post("/games", function (req, res) {
    gamesController.postGame(req,res)
})

router.delete("/games/:id", function (req, res) {
    gamesController.deleteGamesById(req,res)
})

router.put("/games/:id", function (req, res) {
    gamesController.updateGamesById(req,res)
})


export default router;