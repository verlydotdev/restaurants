import { normalizeURL } from "ufo";
import PocketBase from "pocketbase";
import MenuFacade from "../../application/MenuFacade";
import GroupRepositoryPocketBase from "../persistence/GroupRepositoryPocketBase";

export default class MenuBuilder {
  private url?: string;

  withURL(url: string): MenuBuilder {
    this.url = url;
    return this;
  }

  build(): MenuFacade {
    if (!this.url) {
      throw new Error("URL is required");
    }
    return new MenuFacade(
      new GroupRepositoryPocketBase(new PocketBase(normalizeURL(this.url)))
    );
  }
}
