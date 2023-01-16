import type PocketBase from "pocketbase";
import type { Criteria, Group, GroupRepository } from "../../domain";
import { PocketbaseListResponeToPaginationResponseMapper } from "../mappers";

export default class GroupRepositoryPocketBase implements GroupRepository {
  private readonly pocketbase: PocketBase;

  constructor(pocketbase: PocketBase) {
    this.pocketbase = pocketbase;
  }

  getList(criteria?: Criteria): Promise<PaginationResponse<Group>> {
    return new Promise((resolve, reject) => {
      if (criteria?.offset || criteria?.limit) {
        this.pocketbase
          .collection("groups")
          .getList<Group>(criteria?.offset, criteria?.limit)
          .then((response) => {
            resolve(
              PocketbaseListResponeToPaginationResponseMapper.map(response)
            );
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }
}
