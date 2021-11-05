const express = require('express');
const router = express.Router();

const GamesController = require('./../controllers/games.controller');

const gamesController = new GamesController;

router.get('/', gamesController.getGames);
 
router.get('/:id', gamesController.getGamesById);

router.post('/new', gamesController.newGame);

router.put('/edit/:id', gamesController.editById);

router.delete('/delete/:id', gamesController.deleteById);

module.exports = router;