import { gql } from "apollo-server-hapi";

export const typeDefs = gql`
  type Query {
    getAllAuthors: [Author!]!
    getAuthorById(id: ID!): Author
  }

  type Author {
    id: ID!
    name: String!
    books: [String]
    extraField: String
    extraField2: String
  }
`;
