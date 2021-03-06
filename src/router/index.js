import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokemons from '../views/Pokemons.vue';
import Favorites from '../views/Favorites.vue';
import PokemonDetails from "../views/PokemonDetails.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Pokemons',
    component: Pokemons
  },
  {
    path: '/pokemons/:id',
    name: 'pokemonDetails',
    component: PokemonDetails,
    props: true,
  },
  {
    path: '/favorites/',
    name: 'Favorites',
    component: Favorites,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
