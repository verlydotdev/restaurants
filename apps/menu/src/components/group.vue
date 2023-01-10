<script setup lang="ts">
// interfaces
import IGroup from "../interfaces/IGroup";

// props
defineProps<{
  group: IGroup;
}>();
</script>

<template>
  <div class="mt-4 bg-sky-300 text-white">
    <!-- Título y ver todo -->
    <div class="flex items-center justify-between px-4 pt-4 pb-2">
      <span class="text-2xl font-bold">{{ group.name }}</span>

      <span class="text-sm">Ver todo</span>
    </div>

    <!-- Lista de platos -->
    <div class="flex overflow-x-scroll">
      <Dish v-for="dish in group.dishes" :dish="dish" />
    </div>
  </div>
</template>
