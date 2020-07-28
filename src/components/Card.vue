<template>
  <router-link :to="`/pokemons/${pokemon.id}`">
    <div :class="`w-96 h-64 m-4 flex rounded-md bg-pokemon-${pokemon.kinds.slice(-1)[0]}`">
      <div class="w-full flex mt-5 ml-5">
        <div class="w-1/2">
          <div class="mt-4">
            <span class="text-3xl text-app-white font-bold leading-9">{{pokemon.name}}</span>
            <Badge v-for="kind in pokemon.kinds" :key="kind" v-bind:label="kind"/>
          </div>
        </div>
        <div class="w-1/2 flex flex-col">
          <div class="mr-5 text-right">
            <span class="text-2xl text-app-white font-bold">
              {{pokemon.code}}
            </span>
          </div>
          <div class="h-full flex justify-end">
            <div class="card-wrapper-image">
              <img class="w-32 h-32 absolute position-image-pokemon" :src="pokemon.image" :alt="pokemon.image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
  import Badge from "@/components/Badge.vue";

  export default {
    name: "Card",
    data() {
      return {
      } 
    },
    components: {
      Badge,
    },
    props: {
      pokemon: Object,
    },
  }
</script>
<style lang="scss" scoped>
  .card-wrapper-image {
    position: relative;
    width: 100%;
    background-image: url('./../assets/images/card-pokeball.svg');
    background-repeat: no-repeat;
    background-position-x: .6rem;
    background-position-y: 2.8rem;
  }

  .position-image-pokemon {
    top: 4.2rem;
    left: 1.2rem;
  }
</style>
