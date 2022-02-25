import { BookRepository } from "../infra/book-repository";
import { BookViewer } from "../domain/book-viewer.aggregate-root";
import { BookRepositoryMock } from "../infra/book-repository-mock";
import { UseCase } from "./usecase";

export class PrevBookLoader implements UseCase {
  private repository: BookRepository;
  private viewer: BookViewer;

  constructor(viewer: BookViewer) {
    this.repository = new BookRepositoryMock();
    this.viewer = viewer;
  }

  run() {
    const bookViewer = BookViewer.create(
      this.viewer.books,
      this.viewer.index,
      this.repository
    );
    bookViewer.loadPrevBook();
    return bookViewer;
  }
}
