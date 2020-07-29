<template>
  <div class="h-28 relative bg-app-white">
    <header class="w-full h-full py-6 px-8 flex justify-between items-center">
      <!-- Icon pokehack -->
      <div>
        <img v-bind:src="Pokehack" alt="Pokehack">
      </div>
      <!-- navbar -->
      <nav class="h-full text-3xl text-app-black hidden
                  sm:flex sm:justify-between"
      >
        <ul class="mx-4 my-2 flex items-center">
          <router-link to="/" class="h-full">
            <li :class="`h-full px-8 flex items-center cursor-pointer hover:bg-gray-400 ${$route.name == 'Pokemons' ? 'font-bold' : '' }`">
              Pokemons
            </li>
          </router-link>
          <router-link to="/about" class="h-full">
            <li :class="`h-full flex items-center cursor-pointer px-8 hover:bg-gray-400  ${$route.name == 'Favorites' ? 'font-bold' : '' }`">
              Favorites
            </li>
          </router-link>
        </ul>
      </nav>
      <!-- Button-sidebar -->
      <a class="flex flex-col items-center justify-center w-16 h-16 p-2 active:border active:border-solid active:border-primary active:rounded-sm
                sm:hidden"
         href="#"
         @click.prevent.stop="handleSidebar"
      >
        <i class="bg-app-gray button-sidebar-icon"></i>
        <i class="bg-app-gray button-sidebar-icon"></i>
        <i class="bg-app-gray button-sidebar-icon"></i>
      </a>
    </header>

    <!-- wrapper sidebar -->
    <transition name="fade">
      <div class="absolute top-0 w-full h-screen bg-gray-400 opacity-75 z-10
                  sm:hidden"
          v-if="sidebarShow"
          @click.prevent.stop="handleSidebar"
        >
      </div>
    </transition>

    <!-- sidebar -->
    <div class="absolute top-0 w-3/4 h-screen bg-app-white z-20
                sm:hidden"
         v-if="sidebarShow"
      >
      <nav class="py-12 p-10 flex flex-col text-app-black text-3xl">
        <ul class="cursor-pointer">
          <router-link to="/" @click.native="handleSidebar">
            <li :class="`p-4 text-center hover:bg-gray-400 ${$route.name == 'Pokemons' ? 'font-bold' : '' }`">Pokemons</li>
          </router-link>
          <router-link to="/about" @click.native="handleSidebar">
            <li :class="`p-4 text-center hover:bg-gray-400 ${$route.name == 'Favorites' ? 'font-bold' : '' }`">Favorites</li>
          </router-link>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
  import Pokehack from "@/assets/images/pokehack-logo.svg";

  export default {
    name: "Navegation",
    data () {
      return {
        Pokehack,
        sidebarShow: false,
      }
    },
    methods: {
      handleSidebar () {
        this.sidebarShow = !this.sidebarShow;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .button-sidebar-icon {
    @apply flex w-full;
    border-radius: 2px;
    content: '';
    height: 3px;
    margin: .4rem 0;
  }
</style>
