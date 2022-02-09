const {listarPokemons, detalharPokemon} = require('utils-playground');

const todosPokemons = async (req, res) => {
   const { pagina } = req.query

   if(pagina){
    const listaDePokemon = await listarPokemons(pagina)

    return res.status(200).json(listaDePokemon.results)
   }

   const listaDePokemon = await listarPokemons()

    return res.status(200).json(listaDePokemon.results);
 
}

const pokemonId = async (req, res) => {
    const { id } = req.params

    const pokemonEncontrado = await detalharPokemon(id);
    let detalhes = {
        id: pokemonEncontrado.id,
        nome: pokemonEncontrado.name,
        height: pokemonEncontrado.height,
        weight: pokemonEncontrado.weight,
        base_experience: pokemonEncontrado.base_experience,
        forms: pokemonEncontrado.forms,
        habilidade: pokemonEncontrado.abilities,
        species: pokemonEncontrado.species
    }

    return res.status(200).json(detalhes);
}


module.exports = {
    todosPokemons,
    pokemonId
}