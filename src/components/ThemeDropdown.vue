<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'

const theme = useLocalStorage('dokeboard-theme', 'casper')

const themes = {
  casper: 'Casper',
  laramie: 'Laramie',
} as const

const currentTheme = computed(() => theme.value as keyof typeof themes)

function setTheme(newTheme: string) {
  theme.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme)
}
</script>

<template>
  <div class="dropdown w-full">
    <div tabindex="0" role="button" class="btn btn-outline border-accent w-full justify-between">
      {{ themes[currentTheme] }}
      <Icon icon="heroicons:chevron-down" class="size-4 opacity-50" />
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full">
      <li v-for="(displayName, themeName) in themes" :key="themeName">
        <button
          class="btn btn-ghost justify-start"
          :class="{ 'btn-active': currentTheme === themeName }"
          @click="setTheme(themeName)"
        >
          {{ displayName }}
        </button>
      </li>
    </ul>
  </div>
</template>
