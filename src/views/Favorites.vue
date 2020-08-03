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
    name: "Favorites",
    data() {
      return {
        pokemons: [],
      }
    },
    created() {
      this.getPokemons();
    },
    components: {
      PokemonList,
      SpinnerPokeball,
    },
    methods: {
      async getPokemons () {
        try {
          const { localStorage } = window;
          let favorites = JSON.parse(localStorage.getItem('favorites'));
          favorites = favorites.sort((a, b) => a - b);
          favorites = favorites.map(ele => Number(ele));

          const service = await new GetPokemons(favorites);
          let pokemonsData = await service.getPokemons(); 
          this.pokemons = pokemonsData;
        } catch (error) {
          console.error(error)
        }
      }
    },
  }
</script>
