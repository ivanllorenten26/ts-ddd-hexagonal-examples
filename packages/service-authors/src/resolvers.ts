import { GraphQLFieldResolverParams } from "apollo-server-types";

type Author = {
  id: string;
  name: string;
  books?: string[];
};
const authors = new Map<string, Author>();

authors.set("1", {
  id: "1",
  name: "Neal Ford",
  books: ["1"],
});

authors.set("2", {
  id: "2",
  name: "Patrick Kua",
  books: ["1"],
});

authors.set("3", {
  id: "3",
  name: "Sam Newman",
  books: ["2"],
});

authors.set("4", {
  id: "4",
  name: "Vaughn Vernon",
  books: ["3", "5"],
});

authors.set("5", {
  id: "5",
  name: "Tomasz Jaskula",
  books: ["3"],
});

authors.set("6", {
  id: "6",
  name: "Eric Evans",
  books: ["3"],
});

export const resolvers = {
  Query: {
    getAllAuthors: () => {
      return Array.from(authors.values());
    },
    getAuthorById: (_: any, args: { id: string }) => {
      return authors.get(args.id) || null;
    },
  },

  Author: {
    extraField: () => "random text",
    extraField2: () => "random text2",
  },
};
