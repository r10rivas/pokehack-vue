<template>
  <button class="px-10 py-5 bg-blue-700 rounded-full text-white font-bold text-3xl"
          style="minWidth: 140px"
  >
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: "Button",
  }
</script>
