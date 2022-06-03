import { Book } from './book';

export interface BookRepository {
  getAll: () => Promise<Book[]>;
}
