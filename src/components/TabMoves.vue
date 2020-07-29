<template>
  <div>
    <div class="my-2 flex text-2xl leading-8 flex-col first:mt-0"
         v-for="(move, index) in dataTab.moves"
         :key="index"
    >
      <span>{{move.name}}</span>
      <span class='text-gray-700 border-b border-solid border-gray-700'>
        {{`Level ${move.level}`}}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Moves",
    props: {
      dataTab: Object,
    },
  }
</script>
