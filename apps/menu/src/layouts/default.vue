<script setup>
const restaurantName = ref("Mola!");
const restaurantAddress = ref("Calle de la Luna, 1");

const [isRestaurantOpen, toggleRestaurantOpen] = useToggle();
</script>

<template>
  <header class="p-4">
    <div class="flex justify-between">
      <div>
        <h1 class="text-2xl font-bold">
          {{ restaurantName }}
        </h1>

        <p class="text-sm font-bold">
          {{ restaurantAddress }}
        </p>
      </div>

      <!-- Estado apertura -->
      <div>
        <button
          class="rounded py-2 px-4 font-bold text-white"
          :class="{
            'bg-green-500': isRestaurantOpen,
            'bg-red-500': !isRestaurantOpen,
          }"
          @click="toggleRestaurantOpen()"
        >
          {{ isRestaurantOpen ? "Abierto" : "Cerrado" }}
        </button>
      </div>
    </div>

    <SearchInput />
  </header>

  <main>
    <slot></slot>
  </main>
</template>
