<script setup lang="ts">
// interfaces
import IDish from "../interfaces/IDish";

const props = defineProps<{
  dish: IDish;
}>();

const imageUrl = useGetImageUrl(props.dish);
</script>

<template>
  <div :key="dish.id" class="flex w-60 flex-col p-4">
    <div class="mb-2 rounded bg-white shadow-lg">
      <img :src="imageUrl" class="h-full w-full rounded-full object-cover" />
    </div>

    <span class="text-lg font-bold">{{ dish.name }}</span>

    <span class="line-clamp-2 text-sm leading-4 text-gray-600">
      {{ dish.description }}</span
    >
  </div>
</template>
