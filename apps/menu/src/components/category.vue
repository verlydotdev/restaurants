<script setup lang="ts">
import { ListResult } from "pocketbase";

// interfaces
import ICategory from "../interfaces/ICategory";

// props
defineProps<{
  category: ICategory;
}>();
</script>

<template>
  <div class="indigo-500 mt-4 bg-sky-300 text-white">
    <!-- Título y ver todo -->
    <div class="flex items-center justify-between p-4">
      <span class="text-2xl font-bold">{{ category.name }}</span>

      <span class="text-sm">Ver todo</span>
    </div>
  </div>
</template>
