export interface Product {
  product: string;
  serial: string;
  id: number;
  quantity: number;
  total: number;
  image?: string;
  status?: "active" | "pending" | "inactive";
}

export type SortKey = "id" | "product" | "quantity" | "total" | "status";

export type SortDirection = "asc" | "desc";
