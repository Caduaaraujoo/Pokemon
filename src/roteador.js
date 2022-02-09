const express = require('express');
const { todosPokemons, pokemonId } = require('./controladores/pokemon');

const rotas = express();

rotas.get('/pokemon', todosPokemons);
rotas.get('/pokemon/:id', pokemonId);




module.exports = rotas