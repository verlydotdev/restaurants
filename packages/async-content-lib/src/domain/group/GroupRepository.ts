import type { Criteria, Group, PaginationResponse } from "../../domain";

export interface GroupRepository {
  getList(criteria?: Criteria): Promise<PaginationResponse<Group>>;
}
