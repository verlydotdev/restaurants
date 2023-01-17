import { G as GroupRepository, P as PaginationResponse, a as Group } from './OrderType-040d6e5c.js';

declare class MenuFacade {
    private groupRepository;
    constructor(groupRepository: GroupRepository);
    getMainMenu(): Promise<PaginationResponse<Group>>;
}

declare class MenuBuilder {
    private url?;
    withURL(url: string): MenuBuilder;
    build(): MenuFacade;
}

export { MenuBuilder };
