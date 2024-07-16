<template>
  <div class="SidebarSection">
    <div class="SidebarSection__header">
      <div class="SidebarSection__header-menu"></div>
      <div class="SidebarSection__header-search">
        <input class="SidebarSection__header-search-input" type="text" placeholder="Search"/>
      </div>
      <div class="SidebarSection__header-profile"></div>
    </div>
    <div class="SidebarSection__chats">
      <div class="SidebarSection__chats-filter">
        <div class="SidebarSection__chats-filter-item">
          Все
        </div>
      </div>
      <div class="SidebarSection__chats-items">
        <div class="SidebarSection__chats-item">
          <img src="" alt="" class="SidebarSection__chats-item-img">
          <div class="SidebarSection__chats-item-context">
            <div class="SidebarSection__chats-item-context-title">Saved Messages</div>
            <div class="SidebarSection__chats-item-context-message">My text example....</div>
          </div>
          <div class="SidebarSection__chats-item-helper">
            <div class="SidebarSection__chats-item-helper-read-status">-</div>
            <div class="SidebarSection__chats-item-helper-time">
              15:04
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/SidebarSection/SidebarSection.css';

export default defineComponent({
  name: 'SidebarSection',
  components: {},
});
</script>
