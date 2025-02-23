import type { Product, SortKey, SortDirection } from "@/types/product";

// Sort products
export const sortProducts = (
  products: Product[],
  sortKey: SortKey,
  sortDirection: SortDirection,
): Product[] => {
  return [...products].sort((a, b) => {
    const multiplier = sortDirection === "asc" ? 1 : -1;

    switch (sortKey) {
      case "product":
        return multiplier * a.product.localeCompare(b.product);
      case "quantity":
        return multiplier * (a.quantity - b.quantity);
      case "total":
        return multiplier * (a.total - b.total);
      case "id":
        return multiplier * (a.id - b.id);
      case "status":
        const statusA = getStatusFromQuantity(a.quantity);
        const statusB = getStatusFromQuantity(b.quantity);
        return multiplier * statusA.localeCompare(statusB);
      default:
        return 0;
    }
  });
};

// Filter products
export const filterProducts = (
  products: Product[],
  query: string,
): Product[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return products;

  return products.filter(
    (product) =>
      product.product.toLowerCase().includes(searchTerm) ||
      product.serial.toLowerCase().includes(searchTerm) ||
      product.id.toString().includes(searchTerm),
  );
};

// Format price
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

// Get status from quantity
export const getStatusFromQuantity = (quantity: number): Product["status"] => {
  if (quantity > 100) return "high";
  if (quantity > 50) return "medium";
  if (quantity > 20) return "low";
  return "unavailable";
};
