<script setup>
const text = ref("Restaurants menu");

const test = ref(false);

const toggle = () => {
  test.value = !test.value;
};
</script>

<template>
  <div class="m-4">
    <h1 class="title">{{ text }}</h1>
    <button @click="toggle()">Toggle</button>

    <div v-if="test" class="test">Test content2</div>
  </div>
</template>

<style scoped>
.title {
  @apply bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3;
}
</style>
