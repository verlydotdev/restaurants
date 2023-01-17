interface Group extends DomainEntity {
    name: string;
}

interface GroupRepository {
    getList(criteria?: Criteria): Promise<PaginationResponse<Group>>;
}

interface DomainEntity {
    id: string;
    created: string;
    updated: string;
}

interface PaginationResponse<T> {
    items: T[];
    totalPages: number;
    totalItems: number;
    page: number;
    perPage: number;
}

interface Criteria {
    filters?: Filter[];
    order?: Order;
    offset?: number;
    limit?: number;
}

interface Filter {
    field: string;
    operator: string;
    value: string;
}

interface Order {
    field: string;
    direction: OrderType;
}

declare enum OrderType {
    ASC = "asc",
    DESC = "desc"
}

export { Criteria as C, DomainEntity as D, Filter as F, GroupRepository as G, Order as O, PaginationResponse as P, Group as a, OrderType as b };
