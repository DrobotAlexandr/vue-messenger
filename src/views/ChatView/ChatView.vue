<template>
  <div class="ChatView">
    <ChatHeader/>
    <MessagesList :messages="messages"/>
  </div>
</template>

<script lang="ts">


import {defineComponent, computed, watch, ref} from 'vue';
import {useRoute} from 'vue-router';
import MessagesList from "@/components/MessagesList/MessagesList.vue";
import ChatHeader from "@/components/ChatHeader/ChatHeader.vue";
import {useLiveChatStore} from "@/stores/LiveChatStore";
import ChatApi from "@/api/ChatApi";
import {useUserStore} from "@/stores/UserStore";
import './ChatView.scss';

interface ChatMessage {
  id: string;
  position: string;
  status: {
    code: number
  }
}


export default defineComponent({
  name: 'ChatView',
  components: {ChatHeader, MessagesList},
  setup() {
    const liveChatStore = useLiveChatStore();
    const userStore = useUserStore();
    const route = useRoute();
    const messages = ref([]);

    function closeChatNotify() {

      if (userStore.getUserRole() !== 'user') {
        return;
      }

      window.addEventListener('beforeunload', function (event) {
        const message = 'Вы действительно хотите покинуть чат?';
        event.returnValue = message;
        return message;
      });

    }

    closeChatNotify();

    const initializeChat = () => {
      const allMessages = computed(() => liveChatStore.getMessages());

      if (messages.value.length > 0) {
        messages.value = [];
      }

      watch(allMessages, (newMessages) => {

        let noReadIds: (number | string)[] = [];

        const chatMessages = Object.values(newMessages).find(chat => chat.chatId === route.params.chatId);

        if (chatMessages) {
          messages.value = chatMessages.items;

          chatMessages.items.forEach((message: ChatMessage) => {

            if (message.position === 'left' && message.status.code === 0) {
              noReadIds.push(message.id);
            }

          });

          if (noReadIds.length > 0) {
            ChatApi.readMessages({chatId: route.params.chatId, noReadIds: noReadIds});
          }

        }

        setTimeout(() => {
          const messagesList = document.querySelector('.MessagesList__items');
          if (messagesList) {
            messagesList.scrollTop = messagesList.scrollHeight;
          }
        }, 100);
      }, {immediate: true}); // Запускаем сразу после инициализации
    };


    initializeChat();


    watch(() => route.params.chatId, () => {
      initializeChat();
    });

    return {
      messages,
    };
  },
});


</script>


