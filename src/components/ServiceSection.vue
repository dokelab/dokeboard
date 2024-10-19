<script setup lang="ts">
import type { ServiceGroup } from '@doke-config'
import ServiceCard from './ServiceCard.vue'

defineProps<{
  group: ServiceGroup
}>()
</script>

<template>
  <section class="flex w-full flex-col border-opacity-50">
    <div class="divider divider-start text-xl font-bold">
      {{ group.name }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ServiceCard
        v-for="service in group.services"
        :key="service.label"
        :service="service"
      />
    </div>
  </section>
</template>
