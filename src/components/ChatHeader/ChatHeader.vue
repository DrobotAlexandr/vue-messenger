<template>
  <div>
    <div class="ChatHeader">
      <div class="ChatHeader__user" data-bs-toggle="modal" data-bs-target="#userModal">
        <UserAvatar :letter="user.letter"/>
        <div class="ChatHeader__user-name">
          {{ user.name }}
          <LiveChatWorker/>
        </div>
      </div>
      <div class="ChatHeader__user-mobile">
        <router-link to="/" class="ChatHeader__user-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
               viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
          <span>Назад</span>
        </router-link>
        <div class="ChatHeader__user-mobile-name" data-bs-toggle="modal" data-bs-target="#userModal">
          {{ user.name }}
        </div>
        <div class="ChatHeader__user-mobile-avatar" data-bs-toggle="modal" data-bs-target="#userModal">
          <UserAvatar :letter="user.letter"/>
        </div>
      </div>
    </div>
  </div>
  <ChatHeaderUserCard :user="user"/>
</template>

<script lang="ts">

import {defineComponent, computed, watch} from 'vue';
import {useLiveChatStore} from "@/stores/LiveChatStore";
import LiveChatWorker from "@/components/LiveChatWorker/LiveChatWorker.vue";
import ChatHeaderUserCard from "@/components/ChatHeader/components/ChatHeaderUserCard/ChatHeaderUserCard.vue";
import UserAvatar from "@/components/UserAvatar/UserAvatar.vue";
import '@/components/ChatHeader/ChatHeader.css';

interface Chat {
  id: string;
  message: string;
}

export default defineComponent({
  name: 'ChatHeader',
  components: {LiveChatWorker, ChatHeaderUserCard, UserAvatar},
  data() {
    return {
      user: {
        letter: '',
        name: ''
      }
    }
  },
  created() {
    this.setUser({});
  },
  computed: {
    liveChatData() {
      const liveChatStore = useLiveChatStore();
      return liveChatStore.chats;
    }
  },
  watch: {
    liveChatData(chats) {
      this.setUser(chats);
    },
    '$route'(to, from) {
      const liveChatStore = useLiveChatStore();
      this.setUser(liveChatStore.chats);
    }
  },
  methods: {
    setUser(chats: object) {

      if (Array.isArray(chats)) {

        const chatIdToFind = this.$route.params.chatId;
        const foundChat = chats.find((chat: Chat) => chat.id === chatIdToFind);

        this.user.name = foundChat.companion.name;
        this.user.letter = foundChat.companion.avatar.letter;

      }


    }
  }
});

</script>
