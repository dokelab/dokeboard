<script setup lang="ts">
import type { ServiceGroup } from '@doke-config'
import ServiceCard from './ServiceCard.vue'

defineProps<{
  group: ServiceGroup
}>()
</script>

<template>
  <section class="collapse collapse-arrow bg-base-200">
    <input type="checkbox" :name="`accordion-${group.name}`" :checked="true">
    <div class="collapse-title text-xl font-bold">
      {{ group.name }}
    </div>
    <div class="collapse-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="service in group.services" :key="service.label" class="h-full">
          <ServiceCard :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>
