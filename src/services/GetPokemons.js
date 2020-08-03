export default class GetPokemons {
  constructor (collection) {
    this.BASE_URL = 'https://pokeapi.co/api/v2';
    this.collection = collection;
  }

  async getPokemons () {
    try {
      const dataPokemons = await Promise.all(this._fetchPokemons());
      return dataPokemons.map(dataPokemon => this._extractPokemonData(dataPokemon))
    } catch (error) {
      console.error(error)
      return []
    }
  }

  // Private

  _fetchPokemons () {
    return this.collection.map(async ele => {
      let response = await fetch(`${this.BASE_URL}/pokemon/${ele}`);
      let pokemon = await response.json();
      return pokemon;
    });
  }

  _extractPokemonData (dataPokemon) {
    return {
      id: dataPokemon.id,
      name: dataPokemon.name,
      code: this._build_code(dataPokemon.id),
      kinds: this._setKinds(dataPokemon.types),
      image: `https://pokeres.bastionbot.org/images/pokemon/${dataPokemon.id}.png`
    }
  }

  _setKinds(key_types) {
    return key_types.map(type => type.type.name);
  }

  _build_code(id) {
    if (id < 10) {
      return `#00${id}`
    } else if (id < 100) {
      return `#0${id}`
    } else {
      return `#${id}`
    }
  }
}
