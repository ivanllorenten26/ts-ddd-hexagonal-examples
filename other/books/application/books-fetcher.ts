import { BookRepository } from '../domain/book-repository';
import { BookViewer } from '../domain/book-viewer.aggregate-root';
import { BookRepositoryMock } from '../infra/book-repository-mock';
import { BookRepositoryGraphQL } from '../infra/book-respository-graphql';
import { UseCase } from './usecase';

export class BooksFetcher implements UseCase {
  private repository: BookRepository;

  constructor() {
    this.repository = new BookRepositoryGraphQL();
    // this.repository = new BookRepositoryMock();
  }

  async run() {
    const bookViewer = BookViewer.create([], 0, this.repository);
    await bookViewer.getAll();
    return bookViewer;
  }
}
