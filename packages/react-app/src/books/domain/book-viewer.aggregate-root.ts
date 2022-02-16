import { Book } from "./book";

export class BookViewer {
  private _books: Book[];
  private _index: number;
  constructor(books: Book[], index: number) {
    this._books = books;
    this._index = index;
  }

  static create(books: Book[], index: number) {
    return new BookViewer(books, index);
  }

  public get books(): Book[] {
    return this._books;
  }

  public get index(): number {
    return this._index;
  }

  public hasItems(): Boolean {
    return this._books.length > 0;
  }

  public isNextEnabled(): Boolean {
    return this.hasItems() && this._index < this._books.length - 1;
  }

  public isPrevEnabled(): Boolean {
    return this.hasItems() && this._index !== 0;
  }

  public getCurrentBook(): Book | null {
    return this._books[this.index] || null;
  }
}
