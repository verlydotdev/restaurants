import type PocketBase from "pocketbase";
import type {
  Criteria,
  Group,
  GroupRepository,
  PaginationResponse,
} from "../../domain";
import { PocketbaseListResponeToPaginationResponseMapper } from "../mappers";

export default class GroupRepositoryPocketBase implements GroupRepository {
  constructor(private readonly pocketbase: PocketBase) {}

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
