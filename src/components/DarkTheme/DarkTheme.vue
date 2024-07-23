<template>
  <div class="DarkTheme">
    <div class="DarkTheme__check form-check form-switch">
      <input v-model="blackMode" @change="setBlackMode" class="form-check-input" type="checkbox" role="switch"
             id="DarkThemeChecked">
      <label class="form-check-label" for="DarkThemeChecked">Темная тема</label>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/DarkTheme/DarkTheme.css';


export default defineComponent({
  name: 'DarkTheme',
  data() {
    return {
      blackMode: false
    }
  },
  created() {
    this.savedMode();
    this.setBlackMode();
  },
  methods: {
    setBlackMode() {

      let theme = '';

      if (this.blackMode) {
        theme = 'dark';
      } else {
        theme = 'white';
      }

      const htmlElement = document.documentElement;
      htmlElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);

    },
    savedMode() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        if (savedTheme === 'dark') {
          this.blackMode = true;
        } else {
          this.blackMode = false;
        }
      }
    }
  }
});
</script>
