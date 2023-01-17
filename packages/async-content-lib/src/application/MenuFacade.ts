import type { GroupRepository } from "../types";
class MenuFacade {
  constructor(private groupRepository: GroupRepository) {}

  public getMainMenu() {
    return this.groupRepository.getList({ limit: 10, offset: 0 });
  }
}

export default MenuFacade;
