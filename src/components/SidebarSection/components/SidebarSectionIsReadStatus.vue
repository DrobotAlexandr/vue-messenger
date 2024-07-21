<template>
  <div class="SidebarSectionIsReadStatus">

    <svg v-if="statusCode=='send'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-check"
         viewBox="0 0 16 16">
      <path
          d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
    </svg>

    <svg v-if="statusCode=='read'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-all" viewBox="0 0 16 16">
      <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
    </svg>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SidebarSectionIsReadStatus',
  props: ['status'],
  data() {
    return {
      statusCode: ''
    }
  },
  watch: {
    status() {
      this.setStatus();
    }
  },
  created() {
    this.setStatus();
  },
  methods: {
    setStatus() {
      this.statusCode = this.status;
    }
  }
});
</script>