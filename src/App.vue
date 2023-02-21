<template>
  <div id="app">
    <Search msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  toRefs,
  watch,
  onMounted,
  ref
} from '@vue/composition-api'

import Search from './components/Search.vue';

export default defineComponent({
  name: 'App',
  components: {
    Search,
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
