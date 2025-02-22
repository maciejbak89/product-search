export interface Product {
  product: string;
  serial: string;
  id: number;
  quantity: number;
  total: number;
  image?: string;
  status?: "high" | "medium" | "low" | "unavailable";
}

export type SortKey = "quantity" | "product" | "total";

export type SortDirection = "asc" | "desc";
