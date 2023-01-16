interface PaginationResponse<T> {
  items: T[];
  totalPages: number;
  totalItems: number;
  page: number;
  perPage: number;
}
