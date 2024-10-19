<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import ServiceAccordion from '@/components/ServiceAccordion.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import config from '@doke-config'
import { useTitle } from '@vueuse/core'
import { provide } from 'vue'

useTitle(config.siteName)
provide('siteName', config.siteName)
</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content transition-colors duration-300 flex flex-col">
    <header class="container mx-auto p-4 flex justify-between items-center">
      <h1 class="text-4xl font-bold">
        {{ config.siteName }}
      </h1>
    </header>
    <main class="flex-grow container mx-auto p-4">
      <div class="space-y-8">
        <!-- service groups -->
        <template v-for="group in config.serviceGroups" :key="group.name">
          <ServiceAccordion
            v-if="group.type === 'accordion'"
            :group="group"
          />
          <ServiceSection
            v-else-if="group.type === 'section'"
            :group="group"
          />
        </template>
        <!-- orphan services -->
        <div v-if="config.services && config.services.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ServiceCard
            v-for="service in config.services"
            :key="service.label"
            :service="service"
          />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
