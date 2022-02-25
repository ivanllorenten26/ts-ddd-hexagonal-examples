import { gql } from "apollo-server-hapi";

export const typeDefs = gql`
  extend type Query {
    getAllBooks: [Book!]!
    getBookById(id: ID!): Book
  }

  type Book @key(fields: "id") {
    id: ID!
    title: String!
    authors: [String]
    extraField: String
    extraField2: String
  }
`;
