import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product, SortKey, SortDirection } from "@/types/product";
import { sortProducts, filterProducts } from "@/utils/helpers";
import { fetchProducts } from "@/services/api";

export const useProductStore = defineStore("products", () => {
  // State
  const products = ref<Product[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const searchQuery = ref<string>("");
  const sortKey = ref<SortKey>("");
  const sortDirection = ref<SortDirection>("desc");
  const selectedProduct = ref<Product | null>(null);
  const isDialogOpen = ref<boolean>(false);

  // Getters
  const filteredAndSortedProducts = computed(() => {
    const filtered = filterProducts(products.value, searchQuery.value);
    return sortProducts(filtered, sortKey.value, sortDirection.value);
  });

  const totalProducts = computed(() => products.value.length);

  const visibleProducts = computed(
    () => filteredAndSortedProducts.value.length,
  );

  // Actions
  const loadProducts = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetchProducts();
      products.value = response;
      return response;
    } catch (e) {
      error.value = "Failed to load products";
      console.error("Error fetching results: ", e);
      throw new Error("Failed to load products");
    } finally {
      isLoading.value = false;
    }
  };

  const setSort = (key: SortKey) => {
    if (sortKey.value === key) {
      sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
      sortKey.value = key;
      sortDirection.value = "asc";
    }
  };

  const selectProduct = (product: Product) => {
    selectedProduct.value = product;
  };

  const clearSelectedProduct = () => {
    selectedProduct.value = null;
  };

  const setDialogOpen = (value: boolean) => {
    isDialogOpen.value = value;
  };

  return {
    products,
    isLoading,
    error,
    searchQuery,
    sortKey,
    sortDirection,
    selectedProduct,
    isDialogOpen,
    filteredAndSortedProducts,
    totalProducts,
    visibleProducts,
    loadProducts,
    setSort,
    selectProduct,
    clearSelectedProduct,
    setDialogOpen,
  };
});
