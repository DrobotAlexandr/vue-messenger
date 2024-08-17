<template>
  <div class="LiveChatWorkerTyping">
    <div class="LiveChatWorkerTyping__text">Печатает</div>
    <div class="LiveChatWorkerTyping__loader">
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
        <rect fill='#000000' stroke='#000000' stroke-width='15' width='30' height='30' x='25' y='85'>
          <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1'
                   repeatCount='indefinite' begin='-.4'></animate>
        </rect>
        <rect fill='#000000' stroke='#000000' stroke-width='15' width='30' height='30' x='85' y='85'>
          <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1'
                   repeatCount='indefinite' begin='-.2'></animate>
        </rect>
        <rect fill='#000000' stroke='#000000' stroke-width='15' width='30' height='30' x='145' y='85'>
          <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1'
                   repeatCount='indefinite' begin='0'></animate>
        </rect>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/LiveChatWorker/components/LiveChatWorkerTyping/LiveChatWorkerTyping.css';


export default defineComponent({
  name: 'LiveChatWorkerTyping',
});
</script>
