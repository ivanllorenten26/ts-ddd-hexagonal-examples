import { Book } from "./book";

export class BookViewer {
  private books: Book[];
  private index: number;
  constructor(books: Book[], index: number) {
    this.books = books;
    this.index = index;
  }

  static create(books: Book[], index: number) {
    return new BookViewer(books, 0);
  }

  public hasItems(): Boolean {
    return this.books.length > 0;
  }

  public isNextEnabled(): Boolean {
    return this.hasItems() && this.index !== this.books.length - 1;
  }

  public isPrevEnabled(): Boolean {
    return this.hasItems() && this.index !== 0;
  }

  public getCurrentBook(): Book | null {
    return this.books[this.index] || null;
  }
}
