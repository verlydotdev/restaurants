import logger from "consola";
import type { GroupRepository } from "../domain";
class MenuFacade {
  constructor(private groupRepository: GroupRepository) {
    logger.success(`MenuFacade created`);
  }

  public getMainMenu() {
    return this.groupRepository.getList({ limit: 10, offset: 0 });
  }
}

export default MenuFacade;
