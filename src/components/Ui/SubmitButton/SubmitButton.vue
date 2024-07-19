<template>
  <div class="SubmitButton">
    <button :class="'btn btn-primary button-'+templateClass">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/Ui/SubmitButton/SubmitButton.css';

export default defineComponent({
  name: 'SubmitButton',
  props: ['template'],
  components: {},
  data: function () {
    return {
      templateClass: 'default'
    }
  },
  created: function () {
    if (this.template) {
      this.templateClass = this.template;
    }
  }
});
</script>
