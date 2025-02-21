<script setup lang="ts">
import { useProductStore } from "@/stores/products";
import { ref, onMounted } from "vue";
import type { SortKey } from "@/types/product";

const store = useProductStore();
const isLoading = ref(true);

onMounted(() => {
  const checkLoaded = setInterval(() => {
    if (store.products.length > 0) {
      isLoading.value = false;
      clearInterval(checkLoaded);
    }
  }, 100);
});

const sort = (key: SortKey) => {
  store.setSort(key);
};
</script>

<template>
  <div class="product-table" role="region" aria-label="Products table">
    <div v-if="isLoading" class="product-table__loading" aria-live="polite">
      Loading products...
    </div>
    <table
      v-else
      class="product-table__table"
      role="table"
      aria-describedby="table-description"
    >
      <caption id="table-description" class="sr-only">
        List of products showing ID, status, quantity, product name, and prices,
        sortable by column headers
      </caption>
      <thead>
        <tr>
          <th
            class="product-table__header"
            :aria-sort="
              store.sortKey === 'id'
                ? store.sortDirection === 'asc'
                  ? 'ascending'
                  : 'descending'
                : 'none'
            "
            @click="sort('id')"
          >
            ID
            <span
              v-if="store.sortKey === 'id'"
              class="product-table__sort-indicator"
            >
              {{ store.sortDirection === "asc" ? "↑" : "↓" }}
            </span>
          </th>
          <th
            class="product-table__header"
            :aria-sort="
              store.sortKey === 'product'
                ? store.sortDirection === 'asc'
                  ? 'ascending'
                  : 'descending'
                : 'none'
            "
            @click="sort('product')"
          >
            Product Name
            <span
              v-if="store.sortKey === 'product'"
              class="product-table__sort-indicator"
            >
              {{ store.sortDirection === "asc" ? "↑" : "↓" }}
            </span>
          </th>
          <th
            class="product-table__header"
            :aria-sort="
              store.sortKey === 'quantity'
                ? store.sortDirection === 'asc'
                  ? 'ascending'
                  : 'descending'
                : 'none'
            "
            @click="sort('quantity')"
          >
            Quantity
            <span
              v-if="store.sortKey === 'quantity'"
              class="product-table__sort-indicator"
            >
              {{ store.sortDirection === "asc" ? "↑" : "↓" }}
            </span>
          </th>
          <th
            class="product-table__header"
            :aria-sort="
              store.sortKey === 'total'
                ? store.sortDirection === 'asc'
                  ? 'ascending'
                  : 'descending'
                : 'none'
            "
            @click="sort('total')"
          >
            Prices
            <span
              v-if="store.sortKey === 'total'"
              class="product-table__sort-indicator"
            >
              {{ store.sortDirection === "asc" ? "↑" : "↓" }}
            </span>
          </th>
          <th class="product-table__header">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in store.filteredAndSortedProducts.slice(0, 10)"
          :key="product.id"
          class="product-table__row"
          @click="store.selectProduct(product)"
          @keydown.enter="store.selectProduct(product)"
          tabindex="0"
          role="row"
        >
          <td class="product-table__cell" role="cell">{{ product.id }}</td>
          <td class="product-table__cell" role="cell">{{ product.product }}</td>
          <td class="product-table__cell" role="cell">
            {{ product.quantity }}
          </td>
          <td class="product-table__cell" role="cell">
            ${{ product.total.toFixed(2) }}
          </td>
          <td class="product-table__cell" role="cell">
            <span class="status-tag" role="status">Status</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="product-table__summary" aria-live="polite">
      Products {{ store.visibleProducts }} of {{ store.totalProducts }} results
    </div>
  </div>
</template>

<style lang="scss" scoped>
// /* Minimal scoped styles for overrides, e.g., dynamic classes or unique behavior */
// .product-table__row--selected {
//   background-color: lighten($primary-color, 40%);
//   /* Example override for selected row, if needed */
// }

// .product-table__loading {
//   /* Override or add unique loading styles if needed */
//   text-align: center;
//   padding: 20px;
//   color: $text-muted;
// }
</style>

<!-- 
.product-table {
    width: 100%;
    margin-top: 20px;
  
    &__table {
      width: 100%;
      border-collapse: collapse;
      background-color: white;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    &__header {
      padding: 12px;
      text-align: left;
      background-color: $gray-light;
      cursor: pointer;
      border-bottom: 2px solid $border-color;
  
      &:hover {
        background-color: $gray-medium;
      }
  
      &--sorted {
        background-color: $primary-color;
        color: white;
      }
  
      &:focus {
        outline: 2px solid $text-color;
        outline-offset: 2px;
      }
    }
  
    &__sort-indicator {
      margin-left: 4px;
      font-size: 12px;
      vertical-align: middle;
    }
  
    &__row {
      border-bottom: 1px solid $border-color;
      cursor: pointer;
  
      &:hover {
        background-color: $gray-light;
      }
  
      &:focus {
        outline: 2px solid $primary-color;
        outline-offset: 2px;
      }
    }
  
    &__cell {
      padding: 12px;
    }
  
    &__summary {
      margin-top: 10px;
      font-size: 14px;
      color: $text-muted;
    }
  
    &__loading {
      text-align: center;
      padding: 20px;
      color: $text-muted;
    }
  
    .status-tag {
      display: inline-block;
      padding: 4px 8px;
      background-color: $status-blue;
      border-radius: 16px;
      font-size: 12px;
      color: $status-blue-text;
    }
  
    @include mobile {
      &__table {
        display: none;
      }
  
      &__card {
        display: flex;
        flex-direction: column;
        padding: 8px 18px 8px 16px;
        border: 1px solid $border-color;
        border-radius: 4px;
  
        .product-table__card-item {
          margin: 5px 0;
        }
      }
    }
  }
   -->