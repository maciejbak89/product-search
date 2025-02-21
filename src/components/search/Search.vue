<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import Icon from "@/components/ui/Icon.vue";

const store = useProductStore();
const { searchQuery } = storeToRefs(store);
const { setSearchQuery } = store;

function handleSearch(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  setSearchQuery(value);
}
</script>

<template>
  <div class="relative max-w-600 w-100">
    <Icon name="search" class="search-icon absolute text-secondary" />
    <input
      v-model="searchQuery"
      type="text"
      class="w-100 h-40 px-4 pl-10 border rounded font-base text-primary"
      placeholder="Search products by name, ID, or serial number"
      @input="handleSearch"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-icon {
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

input {
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
}
</style>
