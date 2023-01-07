<script setup>
import { ref } from "vue";

const text = ref("Restaurants menu");

const test = ref(false);

const toggle = () => {
  test.value = !test.value;
};
</script>

<template>
  <div class="m-4">
    <h1 class="text-2xl font-bold">{{ text }}</h1>
    <button @click="toggle()">Toggle</button>

    <div v-if="test" class="test">Test content2</div>
  </div>
</template>

<style scoped>
.test {
  margin-top: 1rem;
  background-color: red;
}
</style>
