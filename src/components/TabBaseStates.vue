<template>
  <div>
    <div class="flex w-full flex-col my-3 first:mt-0"
         v-for="(baseState, index) in dataTab.baseStates"
         :key="index">
      <div class="text-2xl leading-8 my-1">
        <span class="min-w-40 inline-flex text-gray-700">{{baseState.nameState}}</span>
        <span >{{baseState.statePercentage}}</span>
      </div>
      <ProgressBar :percentage="baseState.statePercentage"/>
    </div>
  </div>
</template>
<script>
  import ProgressBar from "@/components/ProgressBar";

  export default {
    name: "TabBaseStates",
    props: {
      dataTab: Object,
    },
    components: {
      ProgressBar,
    }
  }
</script>
