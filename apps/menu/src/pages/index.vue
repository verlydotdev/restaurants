<script setup lang="ts">
// interfaces
import ICategory from "../interfaces/ICategory";

const { $pb } = useNuxtApp();

const { data: categories } = await useAsyncData<ICategory[]>(
  "categories",
  async () => {
    const records = await $pb.collection("categories").getFullList<ICategory>();

    return structuredClone(records);
  }
);
</script>

<template>
  <!-- Tarjeta descriptiva -->
  <div class="bg-image h-40">
    <div class="flex flex-col p-4 text-white">
      <!-- Texto -->
      <span class="mb-2 text-2xl font-bold">Mola! - Tienda de pastas</span>

      <span class="font-bold">Cocinar es un acto de amor</span>
      <span
        >Prueba nuestros tagliatelle frescos con la salsa que tu elijas</span
      >
    </div>
  </div>

  <!-- Categorías -->
  <Category v-for="category in categories" :category="category" />
</template>

<style>
.bg-image {
  @apply bg-gradient-to-tr from-sky-500 to-indigo-500 bg-cover bg-center;
}
</style>
