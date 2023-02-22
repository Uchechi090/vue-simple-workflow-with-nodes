<template>
  <div class="container">
    <VueFlow
      :width="250"
      :height="600"
      v-model="elements"
      fit-view-on-init
      class="vue-flow"
      class="basicflow"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
    >
      <template #node-toolbar="nodeProps">
        <SwitchNode :data="nodeProps.data" :label="nodeProps.label" />
      </template>
    </VueFlow>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Position, VueFlow } from '@vue-flow/core';

import SwitchNode from './SwitchNode.vue';

export default defineComponent({
  components: { VueFlow, SwitchNode },
  setup(_, { root }) {
    const defaultNodeStyle = {
      border: '1px solid #10b981',
      background: '#ef467e',
      color: 'white',
      borderRadius: '99px',
    };

    const sourceStyle = {
      background: '#fc8a00',
      color: 'white',
      borderRadius: '2px',
      width: '40px',
      textAlign: 'center',
    };

    const manipulatorStyle = {
      background: '#ffdd1a',
      color: 'white',
      borderRadius: '2px',
      width: '40px',
      textAlign: 'center',
    };

    const predictorStyle = {
      background: '#00cc44',
      color: 'white',
      borderRadius: '2px',
      width: '40px',
      textAlign: 'center',
    };

    const elements = ref([
      {
        id: '2',
        type: 'toolbar',
        // label: 'predictor',
        data: { toolbarPosition: Position.Right },
        position: { x: -50, y: 100 },
        style: predictorStyle,
      },
      {
        id: '4',
        type: 'toolbar',
        // label: 'source',
        data: { toolbarPosition: Position.Left },
        position: { x: 30, y: 500 },
        style: sourceStyle,
      },
      {
        id: '5',
        type: 'toolbar',
        // label: 'manipulator',
        data: { toolbarPosition: Position.Top, toolbarVisible: true },
        position: { x: 0, y: -100 },
        style: manipulatorStyle,
      },
    ]);
    return {
      elements,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 800px;
  width: 400px;

  // .vue-flow {
  //   height: 700px;
  //   width: 300px;
  // }
}
</style>
