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
    this.getUpdates('', '');

    const searchInput = document.querySelector('.SidebarSection__header-search-input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.getUpdates('', searchInput.value);
      });
    }


  },
  watch: {
    '$route'(to, from) {
      this.isTyping = false;
    }
  },
  methods: {
    async getUpdates(version: string, query: string) {

      const liveChatStore = useLiveChatStore();

      const searchInput = document.querySelector('.SidebarSection__header-search-input') as HTMLInputElement;
      let queryParam = '';

      if (searchInput) {
        queryParam = searchInput.value;
      }

      const updates = await LiveChatApi.getUpdates({version: version, query: queryParam});

      if (updates.chats) {
        liveChatStore.setChats(updates.chats);
        liveChatStore.setMessages(updates.messages);
        this.loader = true;

        const currentChat = this.getCurrentChat(updates.chats);

        this.setTyping(currentChat);

        setTimeout(() => {
          this.loader = false;
        }, 1000);
      }

      if (updates.countNew) {
        if (updates.countNew.messages) {
          this.sendAudionNotify(updates.countNew.messages);
          this.sendTitleNotify(updates.countNew.messages);
        }
      }

      if (!query.length) {
        await this.getUpdates(updates.version, '');
      }

    },
    sendAudionNotify(countNewMessages: number) {
      if (localStorage.getItem('countNewMessages') !== '' + countNewMessages + '') {
        if (countNewMessages > 0) {
          const audio = new Audio('/chat/Front-end/dist/audio/notify.mp3');
          audio.play().catch(error => {
            console.error('Ошибка при воспроизведении аудио:', error);
          });
          localStorage.setItem('countNewMessages', '' + countNewMessages + '');
        }
      }
    },
    sendTitleNotify(countNewMessages: number) {
      if (countNewMessages > 0) {
        document.title = '(' + countNewMessages + ')';
      } else {
        document.title = 'Онлайн-чат';
      }
    },
    getCurrentChat(chats: any) {
      const chatIdToFind = this.$route.params.chatId;
      return chats.find((chat: Chat) => chat.id === chatIdToFind);
    },
    setTyping(currentChat: any) {
      this.isTyping = currentChat.companion.isTyping;
    }
  }

})
;
</script>
