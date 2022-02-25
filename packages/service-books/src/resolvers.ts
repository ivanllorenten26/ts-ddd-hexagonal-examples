import { GraphQLFieldResolverParams } from "apollo-server-types";

type Book = {
  id: string;
  title: string;
  authors?: string[];
};
const books = new Map<string, Book>();

books.set("1", {
  id: "1",
  title: "Building Evolutionary Architectures",
  authors: ["1", "2"],
});

books.set("2", {
  id: "2",
  title: "Building Microservices, 2nd Edition",
  authors: ["3"],
});

books.set("3", {
  id: "3",
  title:
    "Strategic Monoliths and Microservices: Driving Innovation Using Purposeful Architecture",
  authors: ["4", "5"],
});

books.set("4", {
  id: "4",
  title: "Domain-driven design",
  authors: ["6"],
});

books.set("5", {
  id: "5",
  title: "Domain-Driven Design Distilled",
  authors: ["3"],
});

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
