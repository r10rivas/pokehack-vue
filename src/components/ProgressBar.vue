<template>
  <div :class="`w-full h-2 my-1 ${colors.secondary}`">
    <div :class="`h-full ${colors.primary}`" :style="`width: ${percentageWidth}%`" ></div>
  </div>
</template>
<script>
  export default {
    name: "ProgressBar",
    data () {
      return {
        colors: null,
        percentageWidth: null,
      }
    },
    props: {
      percentage: Number
    },
    created () {
      if (this.percentage < 50) {
        this.colors = { primary: "bg-red-600", secondary: "bg-red-300" }
      } else {
        this.colors = { primary: "bg-green-300", secondary: "bg-green-600" }
      }

      this.percentageWidth = this.percentage > 100 ? 100 : this.percentage;
    }
  }
</script>