<template>
  <div class="LiveChatWorker">

    <LiveChatWorkerLoader v-if="loader"/>

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
    return {
      loader: true
    }
  },
  created() {
    this.getUpdates('');
  },

  methods: {
    async getUpdates(version: string) {

      const liveChatStore = useLiveChatStore();

      const updates = await LiveChatApi.getUpdates({version: version});

      if (updates.chats) {
        liveChatStore.setChats(updates.chats);
        liveChatStore.setMessages(updates.messages);
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
        }, 1000);
      }

      await this.getUpdates(updates.version);

    }
  }

});
</script>
