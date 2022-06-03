import { gql } from '@apollo/client';

import { Book } from '../domain/book';
import { BookRepository } from '../domain/book-repository';
import client from './graphql-client';

export class BookRepositoryGraphQL implements BookRepository {
  async getAll(): Promise<Book[]> {
    const response = await client.query({
      query: gql`
        query GetBooks {
          getAllBooks {
            id
            title
          }
        }
      `,
    });

    return response.data.getAllBooks;
  }
}
