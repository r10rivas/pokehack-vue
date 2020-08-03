<template>
  <div class="flex flex-col items-center min-h-screen bg-app-white">
    <div class="w-full
                xl:max-w-510"
    >
      <Navegation/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navegation from "./components/Navegation";

  export default {
    name: "App",
    components: {
      Navegation
    }
  }
</script>
