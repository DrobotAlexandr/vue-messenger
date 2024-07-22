<template>
  <div class="ChatHeader">
    <div class="ChatHeader__user" data-bs-toggle="modal" data-bs-target="#userModal">
      <UserAvatar :letter="user.letter"/>
      <div class="ChatHeader__user-name">
        {{ user.name }}
      </div>
    </div>
    <ChatHeaderUserCard :user="user"/>
  </div>
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
