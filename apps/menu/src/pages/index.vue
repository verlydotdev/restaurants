<script setup lang="ts">
// interfaces
import type IDish from "../interfaces/IDish";
import type IGroup from "../interfaces/IGroup";

const restaurantName = ref("Mola! - Tienda de pastas");

const { $pb } = useNuxtApp();

const { data: groups } = await useAsyncData<IGroup[]>(
  "groups",
  async () => {
    const records = await $pb.collection("groups").getFullList<IGroup>(200, {
      expand: "dishes",
    });

    return records;
  },
  {
    transform: (records) => {
      return records.map((record) => {
        record.dishes = record.expand.dishes.map((dish: IDish) => {
          dish.image = $pb.getFileUrl(dish, dish.image);

          return dish;
        });

        return JSON.parse(JSON.stringify(record));
      });
    },
  }
);
</script>

<template>
  <div>
    <!-- Tarjeta descriptiva -->
    <div class="bg-image h-40">
      <div class="flex flex-col p-4 text-white">
        <!-- Texto -->
        <span class="mb-2 text-2xl font-bold">{{ restaurantName }}</span>

        <span class="font-bold">Cocinar es un acto de amor</span>
        <span
          >Prueba nuestros tagliatelle frescos con la salsa que tu elijas</span
        >
      </div>
    </div>

    <!-- Categorías -->
    <GroupItem v-for="group in groups" :key="group.id" :group="group" />
  </div>
</template>

<style>
.bg-image {
  @apply bg-gradient-to-tr from-sky-500 to-indigo-500 bg-cover bg-center;
}
</style>
