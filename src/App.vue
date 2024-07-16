<template>
  <div class="App">
    <login-layout v-if="$route.name==='login'"></login-layout>
    <messenger-layout v-if="$route.name!=='login'"></messenger-layout>
  </div>
</template>
<script setup lang="ts">
import MessengerLayout from "@/layouts/MessengerLayout/MessengerLayout.vue";
import LoginLayout from "@/layouts/LoginLayout/LoginLayout.vue";
</script>