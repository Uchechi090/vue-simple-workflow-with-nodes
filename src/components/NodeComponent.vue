<template>
  <div class="container">
    <VueFlow
      v-model="elements"
      class="basicflow"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
      :width="250"
      :height="600"
      fit-view-on-init
    >
      <!-- <template #node-toolbar="nodeProps">
        <SwitchNode :data="nodeProps.data" :label="nodeProps.label" />
      </template> -->
      <Background :height="300" />
    </VueFlow>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { VueFlow, useVueFlow, MarkerType, Position } from '@vue-flow/core';
import { Background } from '@vue-flow/background';

import SwitchNode from './SwitchNode.vue';

export default defineComponent({
  components: { VueFlow, SwitchNode, Background },
  setup(_, { root }) {
    const sourceStyle = {
      backgroundColor: '#fc8a00',
      color: 'white',
      borderRadius: '2px',
      width: '40px',
      textAlign: 'center',
    };

    const manipulatorStyle = {
      backgroundColor: '#ffdd1a',
      color: 'white',
      borderRadius: '2px',
      width: '40px',
      textAlign: 'center',
    };

    const predictorStyle = {
      backgroundColor: '#00cc44',
      color: 'white',
      borderRadius: '2px',
      width: '40px',
      textAlign: 'center',
    };
    const { onConnect, addEdges } = useVueFlow({});

    const elements = ref([
      {
        id: '1',
        type: 'input',
        label: 'Node 1',
        // type: 'toolbar',
        // label: 'source',
        // data: { toolbarPosition: Position.Left },
        // position: { x: -350, y: 150 },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
        style: sourceStyle,
      },
      {
        id: '2',
        label: 'Node 2',
        // type: 'toolbar',
        // label: 'manipulator',
        // data: { toolbarPosition: Position.Top, toolbarVisible: true },
        // data: { toolbarPosition: Position.Top },
        // position: { x: -180, y: 130 },
        position: { x: 250, y: 100 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: manipulatorStyle,
      },
      {
        id: '3',
        type: 'output',
        label: 'Node 3',
        // type: 'toolbar',
        // label: 'predictor',
        // data: { toolbarPosition: Position.Right },
        // position: { x: -30, y: 110 },
        position: { x: 450, y: 50 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: predictorStyle,
      },
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        markerEnd: MarkerType.ArrowClosed,
        style: { stroke: '#0000' },
      },
      {
        id: 'e2-3',
        source: '2',
        target: '3',
        markerEnd: MarkerType.ArrowClosed,
        style: { stroke: '#0000' },
      },
    ]);

    onConnect((params) => addEdges([params]));

    const defaultNodeStyle = {
      border: '1px solid #10b981',
      background: '#ef467e',
      color: 'white',
      borderRadius: '99px',
    };

    return {
      elements,
      onConnect,
      // nodes,
      // edges,
      addEdges,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import '@vue-flow/node-resizer/dist/style.css';

.container {
  height: 800px;
  width: 500px;
}
</style>
