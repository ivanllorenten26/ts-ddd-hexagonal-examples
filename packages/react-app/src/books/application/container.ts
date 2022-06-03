import { BookRepositoryGraphQL } from "../infra/book-respository-graphql";
import { BookRepository } from "../domain/book-repository";
import { BookRepositoryMock } from "../infra/book-repository-mock";

export const container = {
  getBooksRepository: (): BookRepository => {
    if (process.env.NODE_ENV === "test") {
      return new BookRepositoryMock();
    }
    // return new BookRepositoryGraphQL();
    return new BookRepositoryMock();
  },
};
