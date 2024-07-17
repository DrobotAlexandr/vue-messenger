<template>
  <div class="SubmitButton">
    <button class="btn btn-primary">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/Ui/SubmitButton/SubmitButton.css';

export default defineComponent({
  name: 'SubmitButton',
  components: {},
});
</script>
