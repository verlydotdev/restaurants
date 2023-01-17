import type { Filter, Order } from "../../../domain";

export interface Criteria {
  filters?: Filter[];
  order?: Order;
  offset?: number;
  limit?: number;
}
