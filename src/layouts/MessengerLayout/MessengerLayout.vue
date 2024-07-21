<template>
  <div class="messenger">
    <div class="messenger__sidebar">
      <SidebarSection/>
    </div>
    <div class="messenger__view">
      <div class="messenger__view-container">
        <router-view/>
        <MessageForm/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarSection from "@/components/SidebarSection/SidebarSection.vue";
import MessageForm from "@/components/MessageForm/MessageForm.vue";
</script>