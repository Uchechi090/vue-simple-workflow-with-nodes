<template>
  <NodeToolbar
    style="display: flex; gap: 0.5rem; align-items: center"
    :is-visible="data.toolbarVisible"
    :position="data.toolbarPosition"
  >
    <button>Action1</button>
    <button>Action2</button>
    <button>Action3</button>
  </NodeToolbar>

  <div :style="{ padding: '10px 20px' }">
    {{ label }}
  </div>

  <Handle type="target" :position="Position.Left" />
  <Handle type="source" :position="Position.Right" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Handle, Position } from '@vue-flow/core';
import { NodeToolbar } from '@vue-flow/node-toolbar';

export default defineComponent({
  components: { NodeToolbar, Handle },
  props: {
    data: {
      type: Object,
    },
    label: {
      type: String,
    },
  },
  setup(props, { root }) {
    return {
      Position,
    };
  },
});
</script>
