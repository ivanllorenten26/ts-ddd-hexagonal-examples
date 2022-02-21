import { Book } from "./book";

export interface BookRepository {
  getAll: () => Book[];
}
