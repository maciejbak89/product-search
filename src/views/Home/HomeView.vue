<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import ProductTable from "@/components/ProductTable.vue";
import ProductModal from "@/components/ProductModal.vue";
import Navigation from "@/components/Navigation.vue";

const productStore = useProductStore();
const { selectedProduct } = storeToRefs(productStore);
const { clearSelectedProduct } = productStore;

const handleModalClose = () => {
  clearSelectedProduct();
};
</script>

<template>
  <div class="home">
    <Navigation />
    <div class="home__content">
      <ProductTable />
      <ProductModal
        v-if="selectedProduct"
        :product="selectedProduct"
        @close="handleModalClose"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .home {
//   background-color: $gray-light; // Light gray background from screenshot
//   min-height: 100vh;

//   &__content {
//     padding: 20px;
//     max-width: 1200px;
//     margin: 0 auto;
//   }
// }
</style>
