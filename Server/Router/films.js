const { Router } = require('express');
const { getFilms, postFilm, updateFilm, deleteFilm } = require('../Controller/films.js');
const routers = Router();

routers.get('/film', getFilms);
routers.post('/film', postFilm);
routers.put('/film/:id', updateFilm);
routers.delete('/film/:id', deleteFilm);

module.exports = routers;
