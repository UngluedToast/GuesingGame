const Router = require('express').Router;
const congratsRouter = Router()


const congratsPage = require('../controllers/congrats');


congratsRouter.get('/', congratsPage);



module.exports = congratsRouter 