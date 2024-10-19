<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'
import ThemeDropdown from './ThemeDropdown.vue'

// Link mode toggle
const linkMode = useLocalStorage('linkMode', 'local')

// GitHub repo URL
const githubRepoUrl = 'https://github.com/fractalcounty/dokeboard'
</script>

<template>
  <div class="settings-menu-wrapper text-base-content">
    <button
      class="btn btn-ghost btn-circle"
      onclick="settingsModal.showModal()"
    >
      <Icon
        icon="solar:settings-outline"
        class="size-6"
      />
    </button>
    <dialog id="settingsModal" class="modal">
      <div class="modal-box max-w-md relative">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-bold text-lg text-base-content">
            Settings
          </h3>
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost">
              <Icon icon="mdi:close" class="size-5" />
            </button>
          </form>
        </div>

        <div class="space-y-6">
          <!-- Link Mode Toggle -->
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium mb-1">
                {{ linkMode === 'local' ? 'Local links' : 'Proxied links' }}
              </h4>
            </div>
            <input
              v-model="linkMode"
              type="checkbox"
              class="toggle toggle-primary"
              true-value="proxied"
              false-value="local"
            >
          </div>

          <!-- Theme Dropdown -->
          <div>
            <h4 class="font-medium mb-2">
              Theme
            </h4>
            <ThemeDropdown />
          </div>

          <!-- GitHub Repo Link -->
          <div>
            <h4 class="font-medium mb-2">
              Source Code
            </h4>
            <a
              :href="githubRepoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-primary w-full"
            >
              <Icon icon="mdi:github" class="mr-2 size-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style scoped>
.settings-menu-wrapper {
  color: hsl(var(--bc));
}

.settings-menu-wrapper :deep(*) {
  color: inherit;
}
</style>
