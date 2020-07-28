<template>
  <div v-if="pokemon" class="relative">
    <div :class="`pt-4 px-8 flex flex-col bg-pokemon-${pokemon.kinds.slice(-1)[0]}`">
      <div class="flex justify-between items-center mb-10">
        <span class="text-white text-4xl font-bold leading-10">
          {{pokemon.name}}
        </span>
        <ButtonFavorite :isFavorite="isFavorite" @handleClick="handleClickFavorite"/>
      </div>
      <div class="flex justify-between flex-wrap">
        <div class="flex">
          <Badge v-for="kind in pokemon.kinds" :key="kind" v-bind:label="kind"/>
        </div>
        <div class="flex justify-center order-1 w-full relative mt-10">
          <div class="relative">
            <img :src="Pokehall" alt="pokeball">
            <img :src="pokemon.image" :alt="pokemon.name" class='absolute top-0 z-10' style="left: -45px">
          </div>
        </div>

        <div class="flex mt-2">
          <span class="text-white text-4xl leading-10 font-bold">
            {{pokemon.code}}
          </span>
        </div>
      </div>

    </div>

    <div class="absolute w-full pt-8 bg-white flex flex-col items-center"
         style="top: 92%; borderTopLeftRadius: 2rem; borderTopRightRadius: 2rem;">
      <div class="flex justify-center mt-8 mb-6">
        <Button label="Batalla"/>
      </div>
    </div>
  </div>
  <div v-else>
    <SpinnerPokeball/>
  </div>
</template>
<script>
  import GetPokemon from "@/services/GetDetailsPokemon";
  import SpinnerPokeball from "@/components/SpinnerPokeball.vue";
  import ButtonFavorite from "@/components/ButtonFavorite.vue";
  import Badge from "@/components/Badge.vue";
  import Button from "@/components/Button.vue";
  import Pokehall from "@/assets/images/pokeball.svg";

  export default {
    name: "PokemonDetails",
    data() {
      return {
        Pokehall,
        pokemon: null,
        id: this.$route.params.id,
        isFavorite: this.SetIsFavorite(),
      }
    },
    components: {
      SpinnerPokeball,
      ButtonFavorite,
      Button,
      Badge
    },
    created() {
      this.getPokemon(this.id);
    },
    methods: {
      SetIsFavorite() {
        const { localStorage } = window;
        let favorites = null;

        if (localStorage.favorites == null ) {
          localStorage.setItem('favorites', JSON.stringify([]));
          favorites = [];
        } else {
          favorites = JSON.parse(localStorage.getItem('favorites'));
        }

        return favorites.includes(this.$route.params.id);
      },
      async getPokemon(id) {
        try {
          const service = await new GetPokemon(id);
          let pokemonData = await service.getPokemon(); 
          this.pokemon = pokemonData;
        } catch (error) {
          console.error(error)
        }
      },
      handleClickFavorite () {
        const { localStorage } = window;
        const favorites = JSON.parse(localStorage.getItem('favorites'));

        if (this.isFavorite) {
          const newFavorites = favorites.filter(element => element !== this.id)
          localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
          localStorage.setItem('favorites', JSON.stringify([ ...favorites, this.id ]))
        }

        this.isFavorite = !this.isFavorite;
      }
    }
  }
</script>
