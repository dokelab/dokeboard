<script setup lang="ts">
import config from '@doke-config'
import SettingsMenu from './SettingsMenu.vue'
</script>

<template>
  <footer
    class="relative w-full"
  >
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center text-base-content/50">
        <div class="flex items-center text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 87 86" class="inline-block w-3.5 h-3.5 mr-1 fill-current">
            <path d="M86.6 41.7a41 41 0 0 0-13.4-29.6C31.8-24.3-24.4 31.2 12.8 72.8c26.7 27.5 75.6 7.9 73.8-31.1zM10.7 56.3c-12.3-34.9 25.8-65 55.5-41.6-1.9 2.3-4.8 4.8-7 7.2a21.6 21.6 0 0 0-15-4.7C22.8 16.9 13.7 42 24.3 58.5l-7.8 8.3c-2.5-3-4.5-6.7-5.8-10.5zm17.7-6.9c-5.3-16.3 10.7-33.8 26.3-22.8l-25 26.2-1.3-3.4zM79 45.2a35.5 35.5 0 0 1-57 27c2.7-2.6 5.1-5.3 7.5-8.1C55.7 82.5 76 45.5 59.8 52.2a15.7 15.7 0 0 1-25.6 6.5c8.4-8.5 16.7-17.3 25-25.9 4.7 3.8 8.5.1 4.9-5.2l7.3-7.8A37.5 37.5 0 0 1 79 45.2z" />
          </svg>
          <p>{{ new Date().getFullYear() }} {{ config.siteName }}. No rights reserved.</p>
        </div>
        <SettingsMenu />
      </div>
    </div>
  </footer>
</template>
