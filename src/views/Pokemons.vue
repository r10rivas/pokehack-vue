<template>
  <div class="flex justify-center" v-if="pokemons.length > 0">
    <PokemonList title="Pokemons" :pokemons="pokemons"/>
  </div>
  <div v-else>
    <SpinnerPokeball/>
  </div>
</template>

<script>
  import GetPokemons from "@/services/GetPokemons";
  import PokemonList from "@/components/PokemonList.vue";
  import SpinnerPokeball from "@/components/SpinnerPokeball.vue";

  export default {
    name: 'Pokemons',
    data() {
      return {
        pokemons: [],
      }
    },
    components: {
      SpinnerPokeball,
      PokemonList,
    },
    created() {
      this.getPokemons();
    },
    methods: {
      async getPokemons() {
        try {
          const range = [...Array(30).keys()].map(i => i + 1)
          const service = await new GetPokemons(range);
          let pokemonsData = await service.getPokemons(); 
          this.pokemons = pokemonsData;
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
</script>
