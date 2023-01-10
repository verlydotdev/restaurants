<script setup lang="ts">
import SeachIcon from "~icons/mingcute/search-line";
</script>

<template>
  <!-- Barra de búsqueda -->
  <div class="relative mt-4">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
    >
      <SeachIcon></SeachIcon>
    </div>

    <input
      type="search"
      class="search-input"
      placeholder="¿Que te apetece?..."
      required
    />
  </div>
</template>

<style>
.search-input {
  @apply block w-full rounded-lg border p-4 pl-10 text-sm;
  @apply border-gray-300 bg-gray-50 text-gray-900 focus:border-sky-500 focus:ring-sky-500;
}
</style>
