<template>
  <div class="MessagesList">
    <div v-if="messages" class="MessagesList__items">
      <div v-for="message in messages" v-bind:key="message.id">
        <div :class="'MessagesList__item MessagesList__item_'+message.position">
          <div v-if="message.message" class="MessagesList__item-message">
            <span v-html="message.message"></span>
          </div>
          <div v-if="message.audio" class="MessagesList__item-audio">
            <audio :src="message.audio" controls/>
          </div>
          <div class="MessagesList__item-meta">
          <span class="MessagesList__item-meta-time">
            <span v-html="message.time"></span>
          </span>
            <span v-if="message.position === 'right'" class="MessagesList__item-meta-status">
            <SidebarSectionIsReadStatus :status="message.status.code"/>
          </span>
          </div>
        </div>
        <div class="MessagesList__item-separator"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/MessagesList/MessagesList.css';
import SidebarSectionIsReadStatus from "@/components/SidebarSection/components/SidebarSectionIsReadStatus.vue";

export default defineComponent({
  name: 'MessagesList',
  props: ['messages'],
  components: {SidebarSectionIsReadStatus},
  data() {
    return {}
  },
});
</script>

