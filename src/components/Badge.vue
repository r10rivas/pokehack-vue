<template>
  <div class="my-2 mr-2 last:mr-0">
    <span class="py-3 px-6 min-w-40 inline-block rounded-full text-2xl font-bold leading-7 text-center text-app-white bg-badge-default">
      {{label}}
    </span>
  </div>
</template>
<script>
  export default {
    name: "Badge",
    props: {
      label: String
    },
  }
</script>

<style lang="scss" scoped>
  .bg-badge-default {
    background-color: rgba(254, 254, 254, 0.2);
  }
</style>
