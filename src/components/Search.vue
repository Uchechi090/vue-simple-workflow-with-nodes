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

import { nodeList } from '../utils/nodeList.ts';

export default defineComponent({
  name: 'Search',
  components: {},
  setup(_, { root }) {
    const searchTerm = ref('');

    const performSearch = () =>
      nodeList.filter((node) => {
        return node.title.toLowerCase().includes(searchTerm.toLowerCase());
      });

    return {
      searchTerm,
      performSearch,
    };
  },
});
</script>
