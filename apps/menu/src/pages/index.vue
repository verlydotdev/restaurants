<script setup lang="ts">
import { ListResult } from "pocketbase";

const $pocketbase = usePocketbase();

const { data: categories } = await useAsyncData<ListResult<ICategory>>(
  "categories",
  async () => {
    const list = await $pocketbase
      .collection("categories")
      .getList<ICategory>();

    return {
      ...list,
      items: JSON.parse(JSON.stringify(list.items)),
    };
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
  <div
    class="indigo-500 mt-4 bg-sky-300 text-white"
    v-for="category in categories?.items"
  >
    <!-- Título y ver todo -->
    <div class="flex items-center justify-between p-4">
      <span class="text-2xl font-bold">{{ category.name }}</span>

      <span class="text-sm">Ver todo</span>
    </div>

    <!-- Artículos -->
    <div class="grid grid-cols-2 gap-4 px-4 pb-4">
      <div class="flex flex-col">
        <div
          class="h-40 rounded-lg bg-white bg-[url('https://dam.cocinafacil.com.mx/wp-content/uploads/2014/11/pasta-pomodoro.jpg')] bg-cover bg-center p-4 shadow-lg"
        ></div>

        <span class="my-2 text-xl font-bold">Pomodoro</span>
        <span class="text-sm text-black"
          >Tomate italiano y un toque de albahaca...</span
        >
      </div>

      <div class="flex flex-col">
        <div
          class="h-40 rounded-lg bg-white bg-[url('https://www.halfbakedharvest.com/wp-content/uploads/2021/12/My-Familys-Favorite-Pesto-Pasta-Bolognese-1.jpg')] bg-cover bg-center p-4 shadow-lg"
        ></div>

        <span class="my-2 text-xl font-bold">Bolognese</span>
        <span class="text-sm text-black">Ragout auténtico de ternera</span>
      </div>
    </div>
  </div>
</template>

<style>
.bg-image {
  @apply bg-gradient-to-tr from-sky-500 to-indigo-500 bg-cover bg-center;
}
</style>
