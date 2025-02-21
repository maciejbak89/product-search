<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import ProductRow from "./ProductRow.vue";
import Icon from "@/components/ui/Icon.vue";

const store = useProductStore();
const {
  sortKey,
  sortDirection,
  filteredAndSortedProducts,
  totalProducts,
  visibleProducts,
  isLoading,
} = storeToRefs(store);
const { setSort } = store;

const headers = [
  { key: "id", label: "ID", width: "70px" },
  { key: "status", label: "Status", width: "144px" },
  { key: "quantity", label: "Quantity", width: "125px" },
  { key: "product", label: "Product", width: "auto" },
  //   { key: "serial", label: "Serial" },
  { key: "total", label: "Price", width: "171px" },
] as const;

type HeaderKey = (typeof headers)[number]["key"];

function handleSort(key: HeaderKey) {
  setSort(key);
}
</script>

<template>
  <div class="table-container bg-white rounded border">
    <div
      class="table-header d-flex justify-between align-center p-4 border-bottom"
    >
      <h1 class="font-lg font-medium text-primary">Products</h1>
      <span class="font-sm text-secondary">
        <template v-if="isLoading">Loading products...</template>
        <template v-else
          >{{ visibleProducts }} of {{ totalProducts }} results</template
        >
      </span>
    </div>

    <!-- Desktop table view -->
    <div class="table-responsive">
      <table class="w-100">
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header.key"
              class="table__th"
              :class="{
                'table__th--sortable': true,
                'table__th--active': sortKey === header.key,
                'table__th--asc':
                  sortKey === header.key && sortDirection === 'asc',
                'table__th--desc':
                  sortKey === header.key && sortDirection === 'desc',
              }"
              :style="{ width: header.width }"
              @click="handleSort(header.key)"
            >
              <span class="d-flex align-center gap-2">
                {{ header.label }}
                <Icon
                  v-if="sortKey === header.key"
                  name="sort"
                  :class="{ 'icon--rotate': sortDirection === 'desc' }"
                  aria-hidden="true"
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <ProductRow
            v-for="product in filteredAndSortedProducts"
            :key="product.id"
            :product="product"
          />
        </tbody>
      </table>
    </div>

    <!-- Mobile list view -->
    <div class="mobile-view d-md-none">
      <ProductRow
        v-for="product in filteredAndSortedProducts"
        :key="product.id"
        :product="product"
        mobile
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-container {
  overflow: hidden;
}

.table-responsive {
  display: none;
  overflow-x: auto;

  @media (min-width: 768px) {
    display: block;
  }
}

table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}

.table__th {
  padding: var(--space-4);
  text-align: left;
  font-weight: 500;
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
  white-space: nowrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &--sortable {
    cursor: pointer;
    user-select: none;

    &:hover {
      color: var(--color-text-primary);
      background-color: var(--color-gray-light);
    }
  }

  &--active {
    color: var(--color-text-primary);
  }
}

.icon--rotate {
  transform: rotate(180deg);
}

// Ensure consistent header styling
.table-header {
  border-bottom: 1px solid var(--color-border);
}

// Mobile view container
.mobile-view {
  @media (min-width: 768px) {
    display: none;
  }
}
</style>
