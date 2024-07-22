<template>
  <div class="UserAvatar">
    <div class="UserAvatar__img">
      <span>{{ letter }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/UserAvatar/UserAvatar.css';

export default defineComponent({
  name: 'UserAvatar',
  props: ['letter']
});
</script>
