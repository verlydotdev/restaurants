import type { Criteria, Group } from "..";

export default interface GroupRepository {
  getList(criteria?: Criteria): Promise<PaginationResponse<Group>>;
}
