<template>
  <div class="pt-4 flex justify-center flex-col
              sm:p-4
              lg:w-400"
  >
    <div class="py-5 flex justify-center">
      <span class="text-4xl font-bold">{{title}}</span>
    </div>
    <div class="flex flex-wrap justify-around">
      <Card v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon"/>
    </div>
  </div>
</template>
<script>
  import Card from "@/components/Card.vue";

  export default {
    name: "PokemonList",
    props: {
      title: String,
      pokemons: Array,
    },
    components: {
      Card,
    }
  }
</script>
