import type { GroupRepository } from "../types";
export default class MenuFacade {
  constructor(private groupRepository: GroupRepository) {}

  public getMainMenu() {
    return this.groupRepository.getList({ limit: 10, offset: 0 });
  }
}
