import { BookRepository } from "../domain/book-repository";
import { BookViewer } from "../domain/book-viewer.aggregate-root";
import { BookRepositoryMock } from "../infra/book-repository-mock";
import { UseCase } from "./usecase";

export class BooksFetcher implements UseCase {
  private repository: BookRepository;

  constructor() {
    this.repository = new BookRepositoryMock();
  }

  run() {
    const bookViewer = BookViewer.create([], 0, this.repository);
    bookViewer.getAll();
    return bookViewer;
  }
}
