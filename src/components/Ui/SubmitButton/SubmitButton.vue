<template>
  <div class="SubmitButton">
    <button :class="'btn btn-primary button-'+templateClass+' '+disableClass">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/Ui/SubmitButton/SubmitButton.css';

declare interface ComponentData {
  templateClass: string,
  disableClass: string
}

export default defineComponent({
  name: 'SubmitButton',
  props: ['template', 'disable'],
  components: {},
  data: function (): ComponentData {
    return {
      templateClass: 'default',
      disableClass: ''
    }
  },
  watch: {
    disable() {
      this.setDisabled();
    }
  },
  created: function () {
    this.setDisabled();
    this.setTemplate();
  },
  methods: {
    setDisabled() {
      if (this.disable) {
        this.disableClass = 'disable';
      } else {
        this.disableClass = '';
      }
    },
    setTemplate() {
      if (this.template) {
        this.templateClass = this.template;
      }
    }
  }
});
</script>
