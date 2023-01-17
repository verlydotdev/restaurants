import type { Filter, Order } from "../../../types";

export interface Criteria {
  filters?: Filter[];
  order?: Order;
  offset?: number;
  limit?: number;
}
