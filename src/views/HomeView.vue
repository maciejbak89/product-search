<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import TableTitle from "@/components/table/TableTitle.vue";
import ProductTable from "@/components/table/ProductTable.vue";
import ProductModal from "@/components/modal/ProductModal.vue";

const store = useProductStore();
const { error, selectedProduct } = storeToRefs(store);
const { loadProducts } = store;

onMounted(() => {
  loadProducts();
});
</script>

<template>
  <div class="d-flex flex-column min-h-100">
    <main class="flex-1 py-6" role="main">
      <div class="container">
        <div
          v-if="error"
          role="alert"
          class="alert p-4 mb-4 rounded-lg text-center"
        >
          {{ error }}
        </div>

        <TableTitle />

        <ProductTable />
      </div>
    </main>

    <Transition name="fade">
      <ProductModal v-if="selectedProduct" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.min-h-100 {
  min-height: 100vh;
}

.alert {
  background-color: var(--color-status-unavailable);
  color: var(--color-status-unavailable-text);
}
</style>
