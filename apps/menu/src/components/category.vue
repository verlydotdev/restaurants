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
  <div class="indigo-500 mt-4 bg-sky-300 text-white">
    <!-- Título y ver todo -->
    <div class="flex items-center justify-between p-4">
      <span class="text-2xl font-bold">{{ category.name }}</span>

      <span class="text-sm">Ver todo</span>
    </div>

    <!-- Lista de platos -->
    <div class="overflow-x-scroll">
      <div v-for="dish in dishes">
        <Dish :dish="dish" />
      </div>
    </div>
  </div>
</template>
