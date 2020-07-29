export default class GetDetailsPokemon {
  constructor (id) {
    this.BASE_URL = 'https://pokeapi.co/api/v2';
    this.id = id;
  }

  async getPokemon () {
    const url = `${this.BASE_URL}/pokemon/${this.id}`;
    let response = await fetch(url);
    let data = await response.json();
    return {
      id: data.id,
      name: data.name,
      code: this._build_code(data.id),
      kinds: this._setKinds(data.types),
      image: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
      details: {
        About:{
          height: data.height,
          weight: data.weight,
          abilities: this._buildAbilities(data.abilities)
        },
        BaseStates: {
          baseStates: this._buildBaseStates(data.stats),
        },
        Moves: {
          moves: this._build_moves(data.moves),
        }
      }
    }
  }

  _buildAbilities (abilities) {
    return abilities.map(ability => ability.ability.name);
  }

  _buildBaseStates (baseStates) {
    return baseStates.map(element => (
      {
        nameState: element.stat.name,
        statePercentage: element.base_stat
      }
    ))
  }

  _build_moves (moves) {
    return moves.map(move => (
      {
        name: move.move.name,
        level: move.version_group_details[0].level_learned_at
      }
    ))
  }

  _extractPokemonData(dataPokemon) {
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

  _build_url(start, final) {
    const urls = []
    for (let i = start; i <= final; i++) {
      urls.push(`${this.BASE_URL}/pokemon/${i}`);
    }
    return urls;
  }
}
