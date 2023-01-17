<script setup lang="ts">
import type {
  Group,
  PaginationResponse,
} from "@verlydotdev/async-content-lib/types";

const { $menu } = useNuxtApp();
const { data, error } = useAsyncData<PaginationResponse<Group>>("menu", () =>
  $menu.getMainMenu()
);
</script>

<template>
  <div>
    <div>Nuxt module playground!</div>

    <pre>{{ data }}</pre>
  </div>
</template>
