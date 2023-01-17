import type { OrderType } from "../../../domain";

export interface Order {
  field: string;
  direction: OrderType;
}
