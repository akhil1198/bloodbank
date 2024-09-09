export interface Item {
    id: number;
    name: string;
}

export interface paginatedUser<T> {
    paginatedUser: T[],
    page: number,
    totalPages: number,
    totalItems: number
}