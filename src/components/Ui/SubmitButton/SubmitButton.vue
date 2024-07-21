<template>
  <div class="SubmitButton">
    <button :class="'btn btn-primary button-'+templateClass+' '+disableClass">
      <span v-if="!loading">
        <slot></slot>
      </span>
      <span v-else class="spinner-border text-primary" role="status">
        <span class="visually-hidden"></span>
      </span>
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
  props: {
    template: String,
    disable: Boolean,
    loading: Boolean
  },
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
    },
    loading() {
      this.setLoading();
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
    },
    setLoading() {
      if (this.loading) {
        this.disableClass = 'disable';
      } else {
        this.disableClass = '';
      }
    }
  }
});
</script>
