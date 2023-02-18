import type { Group, PaginationResponse } from "../../types";
import type { Criteria } from "../search/Criteria";

export interface GroupRepository {
  getList(criteria?: Criteria): Promise<PaginationResponse<Group>>;
}
