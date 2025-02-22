<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";

const productsStore = useProductStore();
const { visibleProducts, totalProducts, isLoading } =
  storeToRefs(productsStore);
</script>

<template>
  <div class="d-flex align-end mb-2">
    <h1 class="font-base font-bold text-primary mr-2">Products</h1>
    <Transition name="fade">
      <span
        v-if="!isLoading && totalProducts > 0"
        class="font-xs text-secondary"
      >
        {{ visibleProducts }} of {{ totalProducts }} results
      </span>
    </Transition>
  </div>
</template>
