import { Book } from "../domain/book";

export interface BookRepository {
  getAll: () => Book[];
}
