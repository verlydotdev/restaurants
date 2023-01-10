<script setup lang="ts">
// interfaces
import type IDish from "../interfaces/IDish";

defineProps<{
  dish: IDish;
}>();
</script>

<template>
  <div class="flex w-60 flex-col p-4">
    <div class="mb-2 rounded bg-white shadow-lg">
      <img :src="dish.image" class="h-full w-full rounded object-cover" />
    </div>

    <span class="text-lg font-bold">{{ dish.name }}</span>

    <span class="text-sm leading-4 text-gray-600 line-clamp-2">
      {{ dish.description }}</span
    >
  </div>
</template>
