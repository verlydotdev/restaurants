import type { ListResult } from "pocketbase";
import type { Group } from "../../domain";

export default class PocketbaseListResponeToPaginationResponseMapper {
  static map(response: ListResult<Group>): PaginationResponse<Group> {
    const { items, totalItems, totalPages, page, perPage } = response;
    return {
      items,
      totalItems,
      totalPages,
      page,
      perPage,
    };
  }
}
