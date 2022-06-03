import { Book } from "../domain/book";
import { BookRepository } from "../domain/book-repository";

export class BookRepositoryMock implements BookRepository {
  getAll(): Promise<Book[]> {
    return Promise.resolve([
      {
        id: 1,
        title: "The new Avengers",
        cover: "https://d29xot63vimef3.cloudfront.net/image/avengers/156-2.jpg",
      },
      {
        id: 2,
        title: "The Sandman",
        cover:
          "https://www.lafeltrinelli.it/images/9788833049281_0_536_0_75.jpg",
      },
      {
        id: 3,
        title: "Star Wars: Saga - Boba Fett",
        cover:
          "https://i5.walmartimages.com/asr/ccf80861-e993-43b0-8ed8-673176986909.8e972703082d39f684e185fcab844199.jpeg",
      },
    ]);
  }
}
