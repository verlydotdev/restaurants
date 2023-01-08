<template>
  <!-- Barra de búsqueda -->
  <div class="relative mt-4">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
    >
      <svg
        aria-hidden="true"
        class="h-5 w-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
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
