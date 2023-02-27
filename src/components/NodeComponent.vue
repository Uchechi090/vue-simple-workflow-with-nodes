<template>
  <div class="container">
    <!-- <VueFlow
      :width="250"
      :height="600"
      v-model="elements"
      fit-view-on-init
      class="vue-flow"
      class="basicflow"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.4"
      :max-zoom="7"
    > -->
    <VueFlow
      v-model="elements"
      class="basicflow"
      :default-edge-options="{ type: 'smoothstep' }"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
      fit-view-on-init
    >
      <!-- <template #node-toolbar="nodeProps">
        <SwitchNode :data="nodeProps.data" :label="nodeProps.label" />
      </template> -->
      <Background :pattern-color="'#aaa'" gap="8" />

      <MiniMap />

      <Controls />
    </VueFlow>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { VueFlow, useVueFlow, MarkerType, Position } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import { MiniMap } from '@vue-flow/minimap';

import SwitchNode from './SwitchNode.vue';

export default defineComponent({
  components: { VueFlow, SwitchNode, Background, Controls, MiniMap },
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
    const { onConnect, addEdges } = useVueFlow({
      // fitViewOnInit: true,
      // nodes: [
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
      // ],
      // edges: [
      //   {
      //     id: 'e1a-2',
      //     source: '1',
      //     sourceHandle: 'a',
      //     target: '2',
      //     markerEnd: MarkerType.ArrowClosed,
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
      //     markerEnd: MarkerType.ArrowClosed,
      //     style: () => ({
      //       stroke: '#000000',
      //       filter: 'invert(100%)',
      //     }),
      //   },
      // ],
    });

    const elements = ref([
      {
        id: '1',
        type: 'input',
        // type: 'toolbar',
        // label: 'source',
        // data: { toolbarPosition: Position.Left },
        // position: { x: -350, y: 150 },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
        // style: sourceStyle,
      },
      {
        id: '2',
        // type: 'toolbar',
        // label: 'manipulator',
        // data: { toolbarPosition: Position.Top, toolbarVisible: true },
        // data: { toolbarPosition: Position.Top },
        // position: { x: -180, y: 130 },
        position: { x: 250, y: 100 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        // style: manipulatorStyle,
      },
      {
        id: '3',
        type: 'output',
        // type: 'toolbar',
        // label: 'predictor',
        // data: { toolbarPosition: Position.Right },
        // position: { x: -30, y: 110 },
        position: { x: 750, y: 50 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        // style: predictorStyle,
      },
      {
        id: 'e1-2',
        source: '1',
        // sourceHandle: 'a',
        target: '2',
        markerEnd: MarkerType.ArrowClosed,
        // style: () => ({
        //   stroke: '#000000',
        //   filter: 'invert(100%)',
        // }),
      },
      {
        id: 'e2-3',
        source: '2',
        // sourceHandle: 'b',
        target: '3',
        markerEnd: MarkerType.ArrowClosed,
        // style: () => ({
        //   stroke: '#000000',
        //   filter: 'invert(100%)',
        // }),
      },
    ]);
    // onPaneReady(({ fitView }) => {
    //   fitView();
    // });

    onConnect((params) => addEdges([params]));

    // onMounted(() => {
    //   // add nodes to parent
    //   addNodes([]);
    // });

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
// @import  '../main.css';

.container {
  height: 800px;
  width: 400px;
}
</style>
