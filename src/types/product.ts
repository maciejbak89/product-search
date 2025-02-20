export interface Product {
  product: string;
  serial: string;
  id: number;
  quantity: number;
  total: number;
  image?: string;
}

export type SortKey = "product" | "quantity" | "total";

export type SortDirection = "asc" | "desc";
