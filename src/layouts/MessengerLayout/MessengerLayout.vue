<template>
  <div class="messenger">
    <div class="messenger__sidebar">
      <sidebar-section></sidebar-section>
    </div>
    <div class="messenger__view">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarSection from "@/components/SidebarSection/SidebarSection.vue";
</script>