<template>
  <div class="ChatView">
    <ChatHeader/>
    <MessagesList/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MessagesList from "@/components/MessagesList/MessagesList.vue";
import ChatHeader from "@/components/ChatHeader/ChatHeader.vue";


export default defineComponent({
  name: 'ChatView',
  components: {ChatHeader, MessagesList},
});
</script>
