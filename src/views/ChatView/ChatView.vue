<template>
  <div class="ChatView">
    <MessagesList/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MessagesList from "@/components/MessagesList/MessagesList.vue";


export default defineComponent({
  name: 'ChatView',
  components: {MessagesList},
});
</script>
