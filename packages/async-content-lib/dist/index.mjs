import { normalizeURL } from 'ufo';
import PocketBase from 'pocketbase';
import logger from 'consola';

class MenuFacade {
  constructor(groupRepository) {
    this.groupRepository = groupRepository;
    logger.success(`MenuFacade created`);
  }
  getMainMenu() {
    return this.groupRepository.getList({ limit: 10, offset: 0 });
  }
}

class PocketbaseListResponeToPaginationResponseMapper {
  static map(response) {
    const { items, totalItems, totalPages, page, perPage } = response;
    return {
      items,
      totalItems,
      totalPages,
      page,
      perPage
    };
  }
}

class GroupRepositoryPocketBase {
  constructor(pocketbase) {
    this.pocketbase = pocketbase;
  }
  getList(criteria) {
    return new Promise((resolve, reject) => {
      if (criteria?.offset || criteria?.limit) {
        this.pocketbase.collection("groups").getList(criteria?.offset, criteria?.limit).then((response) => {
          resolve(
            PocketbaseListResponeToPaginationResponseMapper.map(response)
          );
        }).catch((error) => {
          reject(error);
        });
      }
    });
  }
}

class MenuBuilder {
  withURL(url) {
    this.url = url;
    return this;
  }
  build() {
    if (!this.url) {
      throw new Error("URL is required");
    }
    return new MenuFacade(
      new GroupRepositoryPocketBase(new PocketBase(normalizeURL(this.url)))
    );
  }
}

export { MenuBuilder };
