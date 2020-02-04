const { Router } = require("express");
const DevController = require('./controllers/devController')
const SeachController = require('./controllers/searchController')

const routes = Router();

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SeachController.index);

module.exports = routes;
