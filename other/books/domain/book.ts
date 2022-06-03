export class Book {
  constructor(readonly id: number, readonly title: string) {}

  static create(id: number, title: string) {
    return new Book(id, title);
  }
}
