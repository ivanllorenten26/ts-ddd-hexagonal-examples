import { GraphQLFieldResolverParams } from "apollo-server-types";
import { books } from "./data/books";

export const resolvers = {
  Query: {
    getAllBooks: () => {
      return Array.from(books.values());
    },
    getBookById: (_: any, args: { id: string }) => {
      return books.get(args.id) || null;
    },
  },

  Book: {
    extraField: () => "random text",
    extraField2: () => "random text2",
  },
};
