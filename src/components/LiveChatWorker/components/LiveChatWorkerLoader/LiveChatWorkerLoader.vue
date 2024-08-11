<template>
  <div class="LiveChatWorkerLoader">
    <div class="LiveChatWorkerLoader__loader">
      <div class="LiveChatWorkerLoader__loader-load spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
      <div class="LiveChatWorkerLoader__loader-text">обновление...</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/LiveChatWorker/components/LiveChatWorkerLoader/LiveChatWorkerLoader.css';


export default defineComponent({
  name: 'LiveChatWorkerLoader',
});
</script>
