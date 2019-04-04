const Router = require('express').Router;
const gameRouter = Router()

const {gameForm, gameLogic} = require('../controllers/game');

gameRouter.get('/', gameForm);
gameRouter.post('/', gameLogic )


module.exports = gameRouter