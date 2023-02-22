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

    const performSearch = () => {
      console.log(nodeList);
      nodeList.filter((node) => {
        return node.name.toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    };

    return {
      searchTerm,
      performSearch,
    };
  },
});
</script>
