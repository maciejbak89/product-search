<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import Icon from "@/components/ui/Icon.vue";

const productsStore = useProductStore();
const { searchQuery } = storeToRefs(productsStore);
</script>

<template>
  <div role="search" class="search-container">
    <Icon name="search" class="search-icon" aria-hidden="true" />
    <input
      v-model="searchQuery"
      type="search"
      class="w-100 pl-12 pr-4 border font-sm text-primary"
      placeholder="Search by name, ID, or serial number"
      aria-label="Search by name, ID, or serial number"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 360px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
}

.search-icon {
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

input {
  height: 44px;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
}
</style>
