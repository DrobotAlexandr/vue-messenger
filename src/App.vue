<template>
  <div class="App">
    <login-layout v-if="$route.name === 'login'"></login-layout>
    <messenger-layout v-if="$route.name !== 'login'"></messenger-layout>
  </div>
</template>

<script setup lang="ts">
import {onMounted, watch} from 'vue';
import {useRouter} from 'vue-router';
import MessengerLayout from "@/layouts/MessengerLayout/MessengerLayout.vue";
import LoginLayout from "@/layouts/LoginLayout/LoginLayout.vue";
import UserApi from "@/api/UserApi";
import {useUserStore} from "@/stores/UserStore";

const userStore = useUserStore();
const router = useRouter();

const checkUser = async () => {
  const userId = userStore.getUserId();

  if (!userId) {
    await router.push('/login/');
    return;
  }

  const user = await UserApi.getUser(userId);

  userStore.setUserRole(user.role);

  if (!user.id && router.currentRoute.value.name !== 'login') {
    await router.push('/login/');
    return;
  } else if (router.currentRoute.value.name !== 'chat' && router.currentRoute.value.name !== 'main' && user.lastChatId) {
    await router.push('/m/' + user.lastChatId);
    return;
  }

};

watch(() => router.currentRoute.value, () => {
  checkUser();
});
</script>
