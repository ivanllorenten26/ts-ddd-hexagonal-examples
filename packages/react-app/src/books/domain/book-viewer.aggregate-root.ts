import { Book } from "./book";
import { BookRepository } from "./book-repository";

export class BookViewer {
  private _books: Book[];
  private _index: number;
  private _repository: BookRepository;

  constructor(books: Book[], index: number, repository: BookRepository) {
    this._books = books;
    this._index = index;
    this._repository = repository;
  }

  static create(books: Book[], index: number, repository: BookRepository) {
    return new BookViewer(books, index, repository);
  }

  public get books(): Book[] {
    return this._books;
  }

  public get index(): number {
    return this._index;
  }

  public hasItems(): boolean {
    return this._books.length > 0;
  }

  public isNextEnabled(): boolean {
    return this.hasItems() && this._index < this._books.length - 1;
  }

  public isPrevEnabled(): boolean {
    return this.hasItems() && this._index !== 0;
  }

  public getCurrentBook(): Book | null {
    return this._books[this.index] || null;
  }

  public loadNextBook(): void {
    if (this.isNextEnabled()) this._index = this.index + 1;
  }

  public loadPrevBook(): void {
    if (this.isPrevEnabled()) this._index = this.index - 1;
  }

  public getAll(): void {
    this._books = this._repository.getAll();
  }
}
