<template>
  <div class="w-full p-4">
    <ul class="w-full flex justify-between">
      <Tab v-for="(value, name) in data"
           :key="name"
           :tabActive="tabActive === name ? true : false"
           :label="name"
           @handleClick="handleClickTab"
      >
        {{name}}
      </Tab>
    </ul>
    <component class="mt-8" v-bind:is="currentTabComponent" :dataTab="data[tabActive]"></component>
  </div>
</template>
<script>
  import Tab from "@/components/Tab.vue";
  import TabAbout from "@/components/TabAbout.vue";
  import TabBaseStates from "@/components/TabBaseStates.vue";
  import TabMoves from "@/components/TabMoves.vue";

  export default {
    name: "Tabs",
    data () {
      return {
        tabActive: Object.keys(this.data)[0],
      }
    },
    components: {
      Tab,
      TabAbout,
      TabBaseStates,
      TabMoves,
    },
    props: {
      data: Object,
    },
    mounted() {
      console.log(Object.keys(this.data));
    },
    methods: {
      handleClickTab (tab) {
        this.tabActive = tab
      }
    },
    computed: {
      currentTabComponent () {
        return `Tab${this.tabActive}`;
      }
    }
  }
</script>