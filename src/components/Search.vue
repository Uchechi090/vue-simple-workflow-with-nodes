<template>
  <div>
    <input
      type="text"
      v-model="filtersFromQuery.q"
      @keyup="updateQuery()"
      placeholder="Add new node..."
      class="search"
      name="search"
    />
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
  ref,
} from '@vue/composition-api';

export default defineComponent({
  name: 'Search',
  components: {},
});
</script>
