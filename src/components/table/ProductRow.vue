<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import type { Product } from "@/types/product";
import StatusPill from "./StatusPill.vue";
import { formatPrice, getStatusFromQuantity } from "@/utils/helpers";

interface Props {
  product: Product;
  mobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  mobile: false,
});

const store = useProductStore();
const { selectProduct } = store;

function handleClick() {
  selectProduct(props.product);
}
</script>

<template>
  <!-- Mobile card view -->
  <div
    v-if="mobile"
    class="card p-4 border-bottom"
    role="button"
    tabindex="0"
    @click="handleClick"
  >
    <div class="d-flex justify-between align-center mb-3">
      <StatusPill :status="getStatusFromQuantity(product.quantity)" />
      <span class="font-lg font-medium">{{ formatPrice(product.total) }}</span>
    </div>

    <div class="d-flex flex-column gap-1">
      <h3 class="font-base text-primary">{{ product.product }}</h3>
      <span class="font-sm text-secondary">ID: {{ product.id }}</span>
      <span class="font-sm text-secondary">Serial: {{ product.serial }}</span>
      <span class="font-sm text-secondary"
        >Quantity: {{ product.quantity }}</span
      >
    </div>
  </div>

  <!-- Desktop table row -->
  <tr v-else class="table-row" role="row" tabindex="0" @click="handleClick">
    <td class="table-row__cell">{{ product.id }}</td>
    <td class="table-row__cell">
      <StatusPill :status="getStatusFromQuantity(product.quantity)" />
    </td>
    <td class="table-row__cell">{{ product.quantity }}</td>
    <td class="table-row__cell">{{ product.product }}</td>
    <!-- <td class="table-row__cell font-sm text-secondary">{{ product.serial }}</td> -->
    <td class="table-row__cell font-medium">
      {{ formatPrice(product.total) }}
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.table-row {
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--color-gray-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }

  &__cell {
    padding: var(--space-4);
    border-bottom: 1px solid var(--color-border);
    white-space: nowrap;

    &:first-child {
      width: 1%;
    }
  }
}

.card {
  cursor: pointer;
  transition: var(--transition);
  background-color: var(--color-white);

  &:hover {
    background-color: var(--color-gray-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }
}
</style>
