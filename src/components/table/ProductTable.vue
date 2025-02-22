<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import ProductRow from "./ProductRow.vue";
import Icon from "@/components/ui/Icon.vue";
import ProductTableSkeleton from "./ProductTableSkeleton.vue";
import type { SortKey } from "@/types/product";

const productsStore = useProductStore();
const { sortKey, sortDirection, filteredAndSortedProducts, isLoading } =
  storeToRefs(productsStore);
const { setSort } = productsStore;

const isSortPreview = ref(false);
const previewKey = ref<string | null>(null);

const headers = [
  { key: "id", label: "ID", width: "70px", sortable: false },
  { key: "status", label: "Status", width: "144px", sortable: false },
  { key: "quantity", label: "Quantity", width: "125px", sortable: true },
  { key: "product", label: "Product", width: "auto", sortable: true },
  { key: "total", label: "Price", width: "171px", sortable: true },
] as const;

const handleSort = (key: string) => {
  if (isSortable(key)) {
    setSort(key);
  }
};

const isSortable = (key: string): key is SortKey => {
  return ["quantity", "product", "total"].includes(key);
};

const handleMouseEnter = (key: string) => {
  isSortPreview.value = true;
  previewKey.value = key;
};

const handleMouseLeave = () => {
  isSortPreview.value = false;
  previewKey.value = null;
};
</script>

<template>
  <div class="table-container bg-white rounded-lg border">
    <!-- Desktop table view -->
    <div class="table-responsive">
      <table class="w-100">
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header.key"
              class="table__th text-primary font-base font-bold"
              :class="{
                'border-left': header.key === 'total',
                'table__th--sortable': header.sortable,
              }"
              :style="{ width: header.width }"
              @click="header.sortable && handleSort(header.key)"
              @mouseenter="handleMouseEnter(header.key)"
              @mouseleave="handleMouseLeave"
            >
              <div class="header-content">
                <span class="header-label">
                  <span>{{ header.label }}</span>
                  <span v-if="header.sortable && header.key === sortKey">
                    <Icon
                      name="sort"
                      class="icon-placeholder"
                      :class="{
                        'icon--rotate': sortDirection === 'asc',
                        'icon--rotate-down': sortDirection === 'desc',
                      }"
                      aria-hidden="true"
                    />
                  </span>
                  <span v-else class="icon-placeholder"></span>

                  <!-- Sort icon preview -->
                  <span
                    v-if="
                      header.sortable &&
                      previewKey === header.key &&
                      isSortPreview &&
                      previewKey !== sortKey
                    "
                  >
                    <Icon
                      name="sort-preview"
                      class="icon-placeholder"
                      :class="{
                        'icon--rotate': true,
                      }"
                      aria-hidden="true"
                    />
                  </span>
                  <span v-else class="icon-placeholder"></span>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-if="isLoading">
            <ProductTableSkeleton />
          </template>
          <template v-else>
            <ProductRow
              v-for="product in filteredAndSortedProducts"
              :key="product.id"
              :product="product"
            />
          </template>
        </tbody>
      </table>
    </div>

    <!-- Mobile table view -->
    <div class="mobile-view d-md-none">
      <h2
        class="mobile-view__header d-flex justify-center align-center font-base font-bold text-primary border-bottom"
      >
        Product name
      </h2>
      <template v-if="isLoading">
        <ProductTableSkeleton mobile />
      </template>
      <template v-else>
        <ProductRow
          v-for="product in filteredAndSortedProducts"
          :key="product.id"
          :product="product"
          mobile
        />
      </template>
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
  height: 56px;
  border-bottom: 1px solid var(--color-border);
  user-select: none;

  &--sortable {
    cursor: pointer;
  }
}

.icon--rotate {
  transform: rotate(180deg);
  transition: transform var(--transition);
}

.icon--rotate-down {
  transform: rotate(0deg);
  transition: transform var(--transition);
}

.mobile-view {
  @media (min-width: 768px) {
    display: none;
  }

  &__header {
    height: 56px;
  }
}

.header-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.header-label {
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-placeholder {
  position: absolute;
  right: -24px;
  top: 2px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
