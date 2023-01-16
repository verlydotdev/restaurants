import { normalizeURL } from "ufo";
import MenuFacade from "./MenuFacade";

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
    return new MenuFacade(normalizeURL(this.url));
  }
}
