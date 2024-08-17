<template>
  <div class="LiveChatWorker">

    <LiveChatWorkerLoader v-if="loader"/>
    <LiveChatWorkerTyping v-if="!loader && isTyping"/>


  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/LiveChatWorker/LiveChatWorker.css';
import LiveChatWorkerLoader from "@/components/LiveChatWorker/components/LiveChatWorkerLoader/LiveChatWorkerLoader.vue";
import {useLiveChatStore} from "@/stores/LiveChatStore";
import LiveChatApi from "@/api/LiveChatApi";
import LiveChatWorkerTyping from "@/components/LiveChatWorker/components/LiveChatWorkerTyping/LiveChatWorkerTyping.vue";


interface Chat {
  id: string;
}

export default defineComponent({
  name: 'LiveChatWorker',
  components: {LiveChatWorkerTyping, LiveChatWorkerLoader},
  data() {
    return {
      loader: true,
      isTyping: false
    }
  },
  created() {
    this.getUpdates('');
  },
  watch: {
    '$route'(to, from) {
      this.isTyping = false;
    }
  },
  methods: {
    async getUpdates(version: string) {

      const liveChatStore = useLiveChatStore();

      const updates = await LiveChatApi.getUpdates({version: version});

      if (updates.chats) {
        liveChatStore.setChats(updates.chats);
        liveChatStore.setMessages(updates.messages);
        this.loader = true;

        const currentChat = this.getCurrentChat(updates.chats);

        console.log(currentChat);

        this.setTyping(currentChat);

        setTimeout(() => {
          this.loader = false;
        }, 1000);
      }

      await this.getUpdates(updates.version);

    },
    getCurrentChat(chats: any) {
      const chatIdToFind = this.$route.params.chatId;
      return chats.find((chat: Chat) => chat.id === chatIdToFind);
    },
    setTyping(currentChat: any) {
      this.isTyping = currentChat.companion.isTyping;
    }
  }

});
</script>
