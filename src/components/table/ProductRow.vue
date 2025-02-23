<script setup lang="ts">
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

const productStore = useProductStore();
const { selectProduct, setDialogOpen } = productStore;

const handleClick = () => {
  selectProduct(props.product);
  setDialogOpen(true);
};
</script>

<template>
  <!-- Mobile card view -->
  <div
    v-if="mobile"
    class="card d-flex flex-column justify-center px-4 border-bottom"
    role="button"
    tabindex="0"
    @click="handleClick"
  >
    <div class="d-flex flex-column">
      <p class="font-sm text-primary">{{ product.product }}</p>
      <p class="font-xs text-secondary">
        {{ product.serial }} - Qty: {{ product.quantity }}
      </p>
    </div>
  </div>

  <!-- Desktop table row -->
  <tr
    v-else
    class="table-row border-bottom"
    role="row"
    tabindex="0"
    @click="handleClick"
  >
    <td class="table-row__cell table-row__cell--center font-sm">
      {{ product.id }}
    </td>
    <td class="table-row__cell table-row__cell--center">
      <StatusPill :status="getStatusFromQuantity(product.quantity)" />
    </td>
    <td class="table-row__cell table-row__cell--center font-sm">
      {{ product.quantity }}
    </td>
    <td class="table-row__cell table-row__cell--left">
      <div class="font-sm text-primary text-truncate">
        {{ product.product }}
      </div>
      <div class="font-xs text-secondary text-truncate">
        {{ product.serial }}
      </div>
    </td>
    <td class="table-row__cell table-row__cell--right border-left font-sm">
      {{ formatPrice(product.total) }}
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.table-row {
  height: 56px;
  cursor: pointer;
  transition: all var(--transition);

  &:hover {
    background-color: var(--color-gray-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }

  &__cell {
    padding-left: 16px;
    padding-right: 16px;

    &--left {
      text-align: left;
    }

    &--right {
      text-align: right;
    }

    &--center {
      text-align: center;
    }
  }

  &:last-child {
    border-bottom: none;
  }
}

.card {
  height: 56px;
  cursor: pointer;
  transition: all var(--transition);

  &:hover {
    background-color: var(--color-gray-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }

  &:last-child {
    border-bottom: none;
  }
}
</style>
