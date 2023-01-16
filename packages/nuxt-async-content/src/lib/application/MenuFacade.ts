import logger from "consola";
class MenuFacade {
  constructor(private url: string) {
    logger.success(`MenuFacade created with url: ${url}`);
  }

  public getURL(): String {
    return "";
  }
}

export default MenuFacade;
