<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import Navigation from "@/components/navigation/Navigation.vue";
import ProductTable from "@/components/table/ProductTable.vue";
import ProductModal from "@/components/modal/ProductModal.vue";

const store = useProductStore();
const { isLoading, error, selectedProduct } = storeToRefs(store);
const { loadProducts } = store;

onMounted(() => {
  loadProducts();
});
</script>

<template>
  <div class="d-flex flex-column min-h-100">
    <!-- <Navigation /> -->

    <main class="flex-1 py-6" role="main">
      <div class="container">
        <div
          v-if="error"
          role="alert"
          class="alert p-4 mb-4 rounded text-center"
        >
          {{ error }}
        </div>

        <div class="table-wrapper bg-white rounded border">
          <!-- Table header is always visible -->
          <div
            class="table-header d-flex justify-between align-center p-4 border-bottom"
          >
            <h1 class="font-lg font-medium text-primary">Products</h1>
            <span class="font-sm text-secondary">Loading products...</span>
          </div>

          <!-- Loading skeleton -->
          <div
            v-if="isLoading"
            class="table-skeleton"
            role="status"
            aria-live="polite"
          >
            <div
              v-for="n in 5"
              :key="n"
              class="table-skeleton__row d-flex align-center p-4 border-bottom"
            >
              <div class="skeleton-item skeleton-item--id"></div>
              <div class="skeleton-item skeleton-item--status"></div>
              <div class="skeleton-item skeleton-item--name"></div>
              <div class="skeleton-item skeleton-item--price"></div>
            </div>
          </div>

          <!-- Actual table -->
          <ProductTable v-else />
        </div>
      </div>
    </main>

    <ProductModal v-if="selectedProduct" />
  </div>
</template>

<style lang="scss" scoped>
.min-h-100 {
  min-height: 100vh;
}

.alert {
  background-color: var(--color-status-inactive);
  color: var(--color-status-inactive-text);
}

.table-wrapper {
  min-height: 400px; // Prevents layout shift
}

.skeleton-item {
  background: var(--color-gray-light);
  border-radius: var(--border-radius);
  animation: pulse 1.5s infinite;

  &--id {
    width: 60px;
    height: 24px;
    margin-right: var(--space-6);
  }

  &--status {
    width: 80px;
    height: 24px;
    margin-right: var(--space-6);
  }

  &--name {
    flex: 1;
    height: 24px;
    margin-right: var(--space-6);
  }

  &--price {
    width: 100px;
    height: 24px;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
