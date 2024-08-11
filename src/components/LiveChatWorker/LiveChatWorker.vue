<template>
  <div class="LiveChatWorker">

    <LiveChatWorkerLoader/>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/LiveChatWorker/LiveChatWorker.css';
import LiveChatWorkerLoader from "@/components/LiveChatWorker/components/LiveChatWorkerLoader/LiveChatWorkerLoader.vue";


export default defineComponent({
  name: 'LiveChatWorker',
  components: {LiveChatWorkerLoader},
  data() {
    return {}
  },
  created() {
    console.log(1);
  }
});
</script>
