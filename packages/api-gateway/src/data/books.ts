type Book = {
  id: string;
  title: string;
  authors?: string[];
};
export const books = new Map<string, Book>();

books.set("1", {
  id: "1",
  title: "Building Evolutionary Architectures",
  authors: ["Neal Ford", "Patrick Kua", "Rebecca Parsons"],
});

books.set("2", {
  id: "2",
  title: "Building Microservices, 2nd Edition",
  authors: ["Sam Newman"],
});

books.set("3", {
  id: "3",
  title:
    "Strategic Monoliths and Microservices: Driving Innovation Using Purposeful Architecture",
  authors: ["Vaughn Vernon", "Tomasz Jaskula"],
});

books.set("4", {
  id: "4",
  title: "Domain-driven design",
  authors: ["Eric Evans"],
});

books.set("5", {
  id: "5",
  title: "Domain-Driven Design Distilled",
  authors: ["Vaughn Vernon"],
});
