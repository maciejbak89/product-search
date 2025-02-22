<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import TableTitle from "@/components/table/TableTitle.vue";
import ProductTable from "@/components/table/ProductTable.vue";
import ProductModal from "@/components/modal/ProductModal.vue";
import ProductDetails from "@/components/modal/ProductDetails.vue";

import Dialog from "@/components/ui/Dialog.vue";

const store = useProductStore();
const { error, selectedProduct } = storeToRefs(store);
const { loadProducts } = store;

onMounted(() => {
  loadProducts();
});

const isOpen = ref(true);

const handleConfirm = () => {
  // Handle confirmation
  isOpen.value = false;
};
</script>

<template>
  <div class="d-flex flex-column min-h-100">
    <!-- <main class="flex-1 py-6" role="main">
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
    </main> -->
    <Transition name="fade">
      <Dialog
        v-model="isOpen"
        title="Confirm Action"
        @close="isOpen = false"
        @confirm="handleConfirm"
      >
        <ProductDetails :product="selectedProduct" />
      </Dialog>
    </Transition>

    <!-- <Transition name="fade">
      <ProductModal v-if="selectedProduct" />
    </Transition> -->
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
