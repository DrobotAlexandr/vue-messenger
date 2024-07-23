<template>
  <div :class="'messenger messenger-screen-'+$route.name">
    <div class="messenger__sidebar">
      <SidebarSection/>
    </div>
    <div class="messenger__view">
      <div class="messenger__view-container">
        <router-view/>
        <MessageForm v-if="$route.name==='chat'"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarSection from "@/components/SidebarSection/SidebarSection.vue";
import MessageForm from "@/components/MessageForm/MessageForm.vue";
</script>
