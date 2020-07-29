<template>
  <li :class="`w-full p-5 text-center text-2xl text-blue-700 font-bold cursor-pointer hover:bg-blue-200 ${tabActive ? 'border-solid border-b-2 border-blue-700' : ''}`"
      @click="$emit('handleClick', label)"
  >
    <slot></slot>
  </li>
</template>
<script>
  export default {
    name: "Tab",
    props: {
      tabActive: Boolean,
      label: String
    }
  }
</script>
