<template>
  <div id="app">
    <Search />
    <NodeComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Search from './components/Search.vue';
import NodeComponent from './components/NodeComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    Search,
    NodeComponent,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
