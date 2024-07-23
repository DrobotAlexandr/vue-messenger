<template>
  <div>
    <div class="ChatHeader">
      <div class="ChatHeader__user" data-bs-toggle="modal" data-bs-target="#userModal">
        <UserAvatar :letter="user.letter"/>
        <div class="ChatHeader__user-name">
          {{ user.name }}
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
import {defineComponent} from 'vue';
import '@/components/ChatHeader/ChatHeader.css';
import UserAvatar from "@/components/UserAvatar/UserAvatar.vue";
import ChatHeaderUserCard from "@/components/ChatHeader/components/ChatHeaderUserCard/ChatHeaderUserCard.vue";


export default defineComponent({
  name: 'ChatHeader',
  components: {ChatHeaderUserCard, UserAvatar},
  data() {
    return {
      user: {
        letter: 'И',
        name: 'Инна'
      }
    }
  }
});
</script>
