<template>
  <span class="LoginFormSuccessCheck">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
         :class="'bi bi-check-lg '+svgClass"
         viewBox="0 0 16 16">
      <path
          d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
    </svg>
  </span>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

interface ComponentData {
  svgClass: string
}

export default defineComponent({
  props: ['isCheck'],
  name: 'LoginFormSuccessCheck',
  data() {
    return {
      svgClass: 'no-checked',
    }
  },
  watch: {
    isCheck() {
      this.setChecked();
    }
  },
  created() {
    this.setChecked();
  },
  methods: {
    setChecked(): void {
      if (this.isCheck) {
        this.svgClass = 'checked';
      } else {
        this.svgClass = 'no-checked';
      }
    }
  }
});
</script>
<style scoped>
.LoginFormSuccessCheck svg {
  fill: gray;
  width: 50px;
  height: 28px;
  position: absolute;
  margin-top: -6px;
  opacity: 0.3;
}

.LoginFormSuccessCheck .checked {
  fill: green;
  opacity: 1;
}
</style>