export class Book {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly cover: string
  ) {}

  static create(id: number, title: string, cover: string): Book {
    return new Book(id, title, cover);
  }
}
