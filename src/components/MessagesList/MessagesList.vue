<template>
  <div class="MessagesList">
    <div v-if="messages" class="MessagesList__items">
      <div v-for="message in messages" v-bind:key="message.id">
        <div :class="'MessagesList__item MessagesList__item_'+message.position">


          <div v-if="message.self && message.type === 'text'" class="MessagesList__item-dropdown dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" data-bs-toggle="dropdown"
                 class="MessagesList__item-dropdown-icon dropdown-toggle bi bi-three-dots" viewBox="0 0 16 16">
              <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
            </svg>
            <ul class="dropdown-menu MessagesList__item-dropdown-menu">
              <li>
                <a v-if="message.type === 'text'" @click="setEditMessage(message.id, message.message)" class="dropdown-item" href="#">Редактировать</a>
              </li>
            </ul>
          </div>


          <div v-if="message.message" class="MessagesList__item-message">
            <span v-html="message.message"></span>
          </div>
          <div v-if="message.audio" class="MessagesList__item-audio">
            <audio :src="message.audio" controls/>
          </div>
          <div class="MessagesList__item-meta">
            <span class="MessagesList__item-meta-is-edit">
              <span v-if="message.isEdit">изменено</span>
            </span>
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
import {useLiveChatStore} from '@/stores/LiveChatStore';

export default defineComponent({
  name: 'MessagesList',
  props: ['messages'],
  components: {SidebarSectionIsReadStatus},
  data() {
    return {}
  },
  setup() {
    const liveChatStore = useLiveChatStore();

    return {
      liveChatStore
    };
  },
  methods: {
    setEditMessage(messageId: number, message: string) {
      this.liveChatStore.setEditMessage(
          {
            message: message,
            messageId: messageId
          }
      );
    }
  }
});
</script>

