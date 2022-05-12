import { Pageable } from "./Pageable";
import { SortObj } from "./SortObj";
import { Task } from "./Task";

export interface PageResponse {
    content: Task[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    sort: SortObj;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}