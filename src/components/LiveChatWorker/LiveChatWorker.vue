<template>
  <div class="LiveChatWorker">

    <LiveChatWorkerLoader/>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/LiveChatWorker/LiveChatWorker.css';
import LiveChatWorkerLoader from "@/components/LiveChatWorker/components/LiveChatWorkerLoader/LiveChatWorkerLoader.vue";
import {useLiveChatStore} from "@/stores/LiveChatStore";
import LiveChatApi from "@/api/LiveChatApi";


export default defineComponent({
  name: 'LiveChatWorker',
  components: {LiveChatWorkerLoader},
  data() {
    return {}
  },
  created() {
    this.getUpdates();
  },

  methods: {
    async getUpdates() {

      const liveChatStore = useLiveChatStore();

      const updates = await LiveChatApi.getUpdates();

      liveChatStore.setChats(updates.chats);

    }
  }

});
</script>
