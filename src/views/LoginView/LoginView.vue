<template>
  <div class="LoginView">
    <login-form></login-form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LoginForm from "@/components/LoginForm/LoginForm.vue";


export default defineComponent({
  name: 'LoginView',
  components: {LoginForm},
});
</script>
