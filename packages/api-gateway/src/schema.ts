import { gql } from "apollo-server-hapi";

export const typeDefs = gql`
  type Query {
    getAllBooks: [Book!]!
    getBookById(id: ID!): Book
  }

  type Book {
    id: ID!
    title: String!
    authors: [String]
    extraField: String
    extraField2: String
  }
`;
