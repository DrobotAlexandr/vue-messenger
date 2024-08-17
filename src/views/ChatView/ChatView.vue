<template>
  <div class="ChatView">
    <ChatHeader/>
    <MessagesList :messages="messages"/>
  </div>
</template>

<script lang="ts">


import { defineComponent, computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import MessagesList from "@/components/MessagesList/MessagesList.vue";
import ChatHeader from "@/components/ChatHeader/ChatHeader.vue";
import { useLiveChatStore } from "@/stores/LiveChatStore";

export default defineComponent({
  name: 'ChatView',
  components: { ChatHeader, MessagesList },
  setup() {
    const liveChatStore = useLiveChatStore();
    const route = useRoute();
    const messages = ref([]);

    const initializeChat = () => {
      const allMessages = computed(() => liveChatStore.getMessages());

      // Сбросим наблюдатель перед его созданием
      if (messages.value.length > 0) {
        messages.value = [];
      }

      watch(allMessages, (newMessages) => {
        const chatMessages = Object.values(newMessages).find(chat => chat.chatId === route.params.chatId);

        if (chatMessages) {
          messages.value = chatMessages.items;
        }

        setTimeout(() => {
          const messagesList = document.querySelector('.MessagesList__items');
          if (messagesList) {
            messagesList.scrollTop = messagesList.scrollHeight;
          }
        }, 100);
      }, { immediate: true }); // Запускаем сразу после инициализации
    };

    // Инициализация чата
    initializeChat();

    // Отслеживание изменений в параметрах маршрута
    watch(() => route.params.chatId, () => {
      initializeChat(); // Переинициализация чата при изменении chatId
    });

    return {
      messages,
    };
  },
});



</script>


