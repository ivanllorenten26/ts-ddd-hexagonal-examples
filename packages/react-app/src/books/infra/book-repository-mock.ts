import { Book } from "../domain/book";
import { BookRepository } from "../domain/book-repository";

export class BookRepositoryMock implements BookRepository {
  getAll(): Book[] {
    return [
      {
        id: 1,
        title: "The new Avengers",
      },
      {
        id: 2,
        title: "The Sandman",
      },
      {
        id: 3,
        title: "STAR WARS. THE HIGH REPUBLIC: Rising storm",
      },
    ];
  }
}
