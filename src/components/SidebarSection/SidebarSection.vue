<template>
  <div class="SidebarSection">
    <div class="SidebarSection__header">
      <div class="SidebarSection__header-menu">
        <div class="dropdown">
          <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </span>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/login" class="dropdown-item">Выход</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="SidebarSection__header-search">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
             viewBox="0 0 16 16">
          <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <input class="SidebarSection__header-search-input" type="search" placeholder="Поиск"/>
      </div>
      <div class="SidebarSection__header-profile"></div>
    </div>
    <div class="SidebarSection__chats">
      <div class="SidebarSection__chats-filter">
        <div class="SidebarSection__chats-filter-item SidebarSection__chats-filter-item--active">
          Все
        </div>
      </div>
      <div v-if="chats" class="SidebarSection__chats-items">
        <router-link v-for="chat in chats" v-bind:key="chat.id" :to="'/m/'+chat.id"
                     class="SidebarSection__chats-item">
          <UserAvatar :letter="chat.companion.avatar.letter"/>
          <div class="SidebarSection__chats-item-context">
            <div class="SidebarSection__chats-item-context-title">
              <span v-html="chat.companion.name"></span>
            </div>
            <div class="SidebarSection__chats-item-context-message">
              <span v-html="chat.lastMessage.text"></span>
            </div>
          </div>
          <div class="SidebarSection__chats-item-helper">
            <div class="SidebarSection__chats-item-helper-read-status">
              <SidebarSectionIsReadStatus :status="chat.lastMessage.read"/>
            </div>
            <div class="SidebarSection__chats-item-helper-time">
              <span v-html="chat.lastMessage.time"></span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="SidebarSection__chats-settings">
        <DarkTheme/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import '@/components/SidebarSection/SidebarSection.css';
import SidebarSectionIsReadStatus from "@/components/SidebarSection/components/SidebarSectionIsReadStatus.vue";
import UserAvatar from "@/components/UserAvatar/UserAvatar.vue";
import DarkTheme from "@/components/DarkTheme/DarkTheme.vue";
import {useLiveChatStore} from "@/stores/LiveChatStore";

export default defineComponent({
  name: 'SidebarSection',
  components: {DarkTheme, UserAvatar, SidebarSectionIsReadStatus},
  setup() {
    const liveChatStore = useLiveChatStore();
    const chats = computed(() => liveChatStore.getChats());
    return {
      chats,
    };
  },
});
</script>
