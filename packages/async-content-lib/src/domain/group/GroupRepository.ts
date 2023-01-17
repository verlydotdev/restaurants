import type { Criteria, Group, PaginationResponse } from "../../types";

export interface GroupRepository {
  getList(criteria?: Criteria): Promise<PaginationResponse<Group>>;
}
