<script setup lang="ts">
import type { Service } from '@doke-config'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

defineProps<{
  service: Service
}>()

const isHovered = ref(false)
</script>

<template>
  <a
    :href="service.href"
    class="relative group flex items-center py-3 px-4 pr-12 rounded-lg border border-base-content/25 bg-transparent hover:bg-neutral text-base-content duration-200 ease-in-out h-full w-full"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <Icon v-if="service.icon" :icon="service.icon" class="size-6 mr-3 flex-shrink-0" />
    <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
      <div class="font-semibold group-hover:text-primary truncate">
        {{ service.label }}
      </div>
      <div v-if="service.description" class="text-sm truncate">
        {{ service.description }}
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="absolute top-1/2 right-2 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current group-hover:stroke-primary transition-colors duration-300 ease-in-out"
    >
      <line
        x1="5" y1="12" x2="19" y2="12" class="transition-transform duration-300 ease-in-out" :class="[
          isHovered ? 'translate-x-0 scale-x-100' : 'translate-x-3 scale-x-0',
        ]"
      />
      <polyline
        points="12 5 19 12 12 19" class="transition-transform duration-300 ease-in-out" :class="[
          isHovered ? 'translate-x-0' : '-translate-x-1',
        ]"
      />
    </svg>
  </a>
</template>
