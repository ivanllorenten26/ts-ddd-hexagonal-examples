import { BookRepository } from "../domain/book-repository";
import { BookViewer } from "../domain/book-viewer.aggregate-root";
import { container } from "./container";
import { UseCase } from "./usecase";

export class BooksFetcher implements UseCase {
  private repository: BookRepository;

  constructor() {
    this.repository = container.getBooksRepository();
  }

  async run() {
    const bookViewer = BookViewer.create([], 0, this.repository);
    await bookViewer.getAll();
    return bookViewer;
  }
}
