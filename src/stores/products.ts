import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product, SortKey, SortDirection } from "@/types/product";
import { sortProducts, filterProducts } from "@/utils/helpers";
import { fetchProducts } from "@/services/api";

export const useProductStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const searchQuery = ref<string>("");
  const sortKey = ref<SortKey>("");
  const sortDirection = ref<SortDirection>("desc");
  const selectedProduct = ref<Product | null>(null);

  const filteredAndSortedProducts = computed(() => {
    const filtered = filterProducts(products.value, searchQuery.value);
    return sortProducts(filtered, sortKey.value, sortDirection.value);
  });

  const totalProducts = computed(() => products.value.length);
  const visibleProducts = computed(
    () => filteredAndSortedProducts.value.length,
  );

  async function loadProducts() {
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
  }

  function setSearchQuery(query: string) {
    searchQuery.value = query;
  }

  function setSort(key: SortKey) {
    if (sortKey.value === key) {
      sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
      sortKey.value = key;
      sortDirection.value = "asc";
    }
  }

  function selectProduct(product: Product) {
    selectedProduct.value = product;
  }

  function clearSelectedProduct() {
    selectedProduct.value = null;
  }

  return {
    products,
    isLoading,
    error,
    searchQuery,
    sortKey,
    sortDirection,
    selectedProduct,
    filteredAndSortedProducts,
    totalProducts,
    visibleProducts,
    loadProducts,
    setSearchQuery,
    setSort,
    selectProduct,
    clearSelectedProduct,
  };
});
