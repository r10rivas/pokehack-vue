<template>
  <div>
    <div class="mb-8 text-2xl leading-8 font-normal">
      <span class="min-w-28 inline-flex text-gray-700">Height:</span>
      <span>{{dataTab.height}}</span>
    </div>
    <div class='mb-8 text-2xl leading-8 font-normal'>
      <span class="min-w-28 inline-flex text-gray-700">Weight:</span>
      <span >{{dataTab.weight}}</span>
    </div>
    <div class='mb-8 text-2xl leading-8 font-normal'>
      <span class="min-w-28 inline-flex text-gray-700">Abilities:</span>
      <span>{{String(dataTab.abilities)}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabAbout",
    props: {
      dataTab: Object,
    }
  }
</script>