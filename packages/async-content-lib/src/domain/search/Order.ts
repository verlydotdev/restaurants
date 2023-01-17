import type { OrderType } from "../../types";

export interface Order {
  field: string;
  direction: OrderType;
}
