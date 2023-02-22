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
      <li>
        <a>{{ node.name }}</a>
      </li>
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

<style lang="scss" scoped>
.search {
  width: 300px;
  height: 30px;
  border-width: 2px;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    font-size: 18px;
    font-weight: 100;
  }
}
ul {
  li {
    list-style-type: none;
    padding: 0;
    margin: -19px 23px 0 22px;

    a {
      border: 1px solid #ddd;
      background-color: #f6f6f6;
      padding: 2px;
      width: 300px;
      text-decoration: none;
      font-size: 13px;
      color: black;
      display: block;
      cursor: pointer;
    }
  }
}
</style>
