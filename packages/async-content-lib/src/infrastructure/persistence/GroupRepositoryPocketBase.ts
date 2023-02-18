import type PocketBase from "pocketbase";
import type { Criteria } from "../../domain/search/Criteria";
import type { Group, GroupRepository, PaginationResponse } from "../../types";
import PocketbaseListResponeToPaginationResponseMapper
  from "../mappers/PocketbaseListResponeToPaginationResponseMapper";

export default class GroupRepositoryPocketBase implements GroupRepository {
  constructor(private readonly pocketbase: PocketBase) {
  }

  getList(criteria: Criteria): Promise<PaginationResponse<Group>> {
    return new Promise((resolve, reject) => {
      this.geListFromPB(criteria, resolve, reject);
    });
  }

  private geListFromPB(criteria: Criteria, resolve: (value: (PromiseLike<PaginationResponse<Group>> | PaginationResponse<Group>)) => void, reject: (reason?: any) => void) {
    this.pocketbase
      .collection("groups")
      .getList<Group>(criteria?.offset, criteria?.limit/*, {
        filter: criteria?.filters?.map((filter) => `${filter.field} ${filter.operator} ${filter.value}`).join(" && ")
      } */)
      .then((response) => {
        resolve(
          new PocketbaseListResponeToPaginationResponseMapper().map(
            response
          )
        );
      })
      .catch((error) => {
        reject(error);
      });
  }
}
