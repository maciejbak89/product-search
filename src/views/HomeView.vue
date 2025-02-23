<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import TableTitle from "@/components/table/TableTitle.vue";
import ProductTable from "@/components/table/ProductTable.vue";
import Dialog from "@/components/ui/Dialog.vue";
import ProductDetails from "@/components/modal/ProductDetails.vue";

const productsStore = useProductStore();
const { selectedProduct, isDialogOpen } = storeToRefs(productsStore);
const { loadProducts, setDialogOpen, clearSelectedProduct } = productsStore;

const handleClose = () => {
  setDialogOpen(false);
  clearSelectedProduct();
};

onMounted(() => {
  loadProducts();
});
</script>

<template>
  <div class="d-flex flex-column">
    <main class="flex-1" role="main">
      <div class="container">
        <TableTitle />
        <ProductTable />
      </div>
    </main>

    <Dialog
      v-model="isDialogOpen"
      :title="selectedProduct?.product"
      :is-primary="false"
      secondary-text="Close"
      @close="handleClose"
    >
      <ProductDetails :product="selectedProduct" />
    </Dialog>
  </div>
</template>

<style lang="scss" scoped>
main {
  padding-top: 64px;
  @media (max-width: 767px) {
    padding-top: 32px;
  }
}
</style>
