<script setup lang="ts">
// interfaces
import IDish from "../interfaces/IDish";

const props = defineProps<{
  dish: IDish;
}>();

const imageUrl = useGetImageUrl(props.dish);
</script>

<template>
  <div :key="dish.id" class="m-4 flex h-64 w-64 flex-col">
    <div class="mb-2 h-48 w-48 rounded bg-white shadow-lg">
      <img :src="imageUrl" class="h-full w-full rounded-full object-cover" />
    </div>

    <span class="text-lg font-bold">{{ dish.name }}</span>

    <span class="text-sm text-gray-600">{{ dish.description }}</span>
  </div>
</template>
