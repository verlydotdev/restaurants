<script setup lang="ts">
// interfaces
import ICategory from "../interfaces/ICategory";
import IDish from "../interfaces/IDish";

// props
defineProps<{
  category: ICategory;
}>();

const { $pb } = useNuxtApp();

const { data: dishes } = await useAsyncData<IDish[]>("dishes", async () => {
  const records = await $pb.collection("dishes").getFullList<IDish>();

  return structuredClone(records);
});
</script>

<template>
  <div class="mt-4 bg-sky-300 text-white">
    <!-- Título y ver todo -->
    <div class="flex items-center justify-between px-4 pt-4 pb-2">
      <span class="text-2xl font-bold">{{ category.name }}</span>

      <span class="text-sm">Ver todo</span>
    </div>

    <!-- Lista de platos -->
    <div class="flex overflow-x-scroll">
      <Dish v-for="dish in dishes" :dish="dish" />
    </div>
  </div>
</template>
