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
      :min-zoom="0.4"
      :max-zoom="7"
    >
      <!-- <template #node-toolbar="nodeProps">
        <SwitchNode :data="nodeProps.data" :label="nodeProps.label" />
      </template> -->
      <Background />
    </VueFlow>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Position, VueFlow, useVueFlow, MarkerType } from '@vue-flow/core';
import { Background } from '@vue-flow/background';

import SwitchNode from './SwitchNode.vue';

export default defineComponent({
  components: { VueFlow, SwitchNode },
  setup(_, { root }) {
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
    const { onConnect, nodes, edges, addEdges, addNodes } = useVueFlow({
      fitViewOnInit: true,
      nodes: [
        {
          id: '1',
          type: 'toolbar',
          // label: 'source',
          data: { toolbarPosition: Position.Left },
          position: { x: -350, y: 150 },
          style: sourceStyle,
        },
        {
          id: '2',
          type: 'toolbar',
          // label: 'manipulator',
          // data: { toolbarPosition: Position.Top, toolbarVisible: true },
          data: { toolbarPosition: Position.Top },
          position: { x: -180, y: 130 },
          style: manipulatorStyle,
        },
        {
          id: '3',
          type: 'toolbar',
          // label: 'predictor',
          data: { toolbarPosition: Position.Right },
          position: { x: -30, y: 110 },
          style: predictorStyle,
        },
      ],
      edges: [
        {
          id: 'e1a-2',
          source: '1',
          sourceHandle: 'a',
          target: '2',
          markerEnd: MarkerType.ArrowClosed,
          style: () => ({
            stroke: '#000000',
            filter: 'invert(100%)',
          }),
        },
        {
          id: 'e1b-3',
          source: '2',
          sourceHandle: 'b',
          target: '3',
          markerEnd: MarkerType.ArrowClosed,
          style: () => ({
            stroke: '#000000',
            filter: 'invert(100%)',
          }),
        },
      ],
    });

    onConnect((params) => addEdges([params]));

    onMounted(() => {
      // add nodes to parent
      addNodes([]);
    });

    const defaultNodeStyle = {
      border: '1px solid #10b981',
      background: '#ef467e',
      color: 'white',
      borderRadius: '99px',
    };

    // const elements = ref([
    //   {
    //     id: '1',
    //     type: 'toolbar',
    //     // label: 'source',
    //     data: { toolbarPosition: Position.Left },
    //     position: { x: -350, y: 150 },
    //     style: sourceStyle,
    //   },
    //   {
    //     id: '2',
    //     type: 'toolbar',
    //     // label: 'manipulator',
    //     // data: { toolbarPosition: Position.Top, toolbarVisible: true },
    //     data: { toolbarPosition: Position.Top },
    //     position: { x: -180, y: 130 },
    //     style: manipulatorStyle,
    //   },
    //   {
    //     id: '3',
    //     type: 'toolbar',
    //     // label: 'predictor',
    //     data: { toolbarPosition: Position.Right },
    //     position: { x: -30, y: 110 },
    //     style: predictorStyle,
    //   },
    //   {
    //     id: 'e1a-2',
    //     source: '1',
    //     sourceHandle: 'a',
    //     target: '2',
    //     style: () => ({
    //       stroke: '#000000',
    //       filter: 'invert(100%)',
    //     }),
    //   },
    //   {
    //     id: 'e1b-3',
    //     source: '2',
    //     sourceHandle: 'b',
    //     target: '3',
    //     style: () => ({
    //       stroke: '#000000',
    //       filter: 'invert(100%)',
    //     }),
    //   },
    // ]);
    return {
      // elements,
      onConnect,
      nodes,
      edges,
      addEdges,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 800px;
  width: 400px;
}
</style>
