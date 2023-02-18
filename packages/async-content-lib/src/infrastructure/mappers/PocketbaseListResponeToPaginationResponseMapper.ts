import type { ListResult } from "pocketbase";
import type { Group, Mapper, PaginationResponse } from "../../types";

export default class PocketbaseListResponeToPaginationResponseMapper
  implements Mapper<ListResult<Group>, PaginationResponse<Group>>
{
  map(from: ListResult<Group>): PaginationResponse<Group> {
    const { items, totalItems, totalPages, page, perPage } = from;
    return {
      items,
      totalItems,
      totalPages,
      page,
      perPage,
    };
  }
}
