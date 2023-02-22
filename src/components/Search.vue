<template>
  <div>
    <input
      type="text"
      v-model="searchTerm"
      @keyup="performSearch()"
      placeholder="Add new node..."
      class="search"
      name="search"
    />
    <ul v-for="(node, i) in filteredList" :key="i">
      <li>{{ node.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { nodeList } from './data';

export default defineComponent({
  name: 'Search',
  components: {},
  setup(_, { root }) {
    const searchTerm = ref('');
    const filteredList = ref();

    const performSearch = () => {
      console.log(nodeList);
      filteredList.value = nodeList.filter((node) => {
        return node.name.toLowerCase().includes(searchTerm.value.toLowerCase());
      });
      console.log(filteredList.value);
    };

    return {
      searchTerm,
      filteredList,
      performSearch,
    };
  },
});
</script>
