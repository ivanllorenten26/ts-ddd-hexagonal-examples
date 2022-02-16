import { Book } from "../book";
import { BookViewer } from "../book-viewer.aggregate-root";

describe("BookViewer", () => {
  describe("constructor", () => {
    test("constructor should generate an object with the list of books", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = new BookViewer(books, 0);
      expect(viewer.books).toEqual(books);
    });

    test("constructor should generate an object with the index", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = new BookViewer(books, 0);
      expect(viewer.index).toBe(0);
    });
  });

  describe("create", () => {
    test("Should create an object with the list of books", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 0);
      expect(viewer.books).toEqual(books);
    });

    test("Should create an object with index equal to 0", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 0);
      expect(viewer.index).toBe(0);
    });
  });

  describe("hasItems", () => {
    test("should return false when no books are set", () => {
      const books: Book[] = [];
      const viewer = BookViewer.create(books, 0);
      expect(viewer.hasItems()).toBe(false);
    });

    test("should return true when books are set", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 0);
      expect(viewer.hasItems()).toBe(true);
    });
  });

  describe("isNextEnabled", () => {
    test("should return true when index is not the last book", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 0);
      expect(viewer.isNextEnabled()).toBe(true);
    });

    test("should return false when index is the last book", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 1);
      expect(viewer.isNextEnabled()).toBe(false);
    });

    test("should return false when no books are set", () => {
      const books: Book[] = [];
      const viewer = BookViewer.create(books, 0);
      expect(viewer.isNextEnabled()).toBe(false);
    });
  });

  describe("isPrevEnabled", () => {
    test("should return false when no books are set", () => {
      const books: Book[] = [];
      const viewer = BookViewer.create(books, 0);
      expect(viewer.isPrevEnabled()).toBe(false);
    });

    test("should return false if index is 0", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 0);
      expect(viewer.isPrevEnabled()).toBe(false);
    });

    test("should return true if index is not 0", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 1);
      expect(viewer.isPrevEnabled()).toBe(true);
    });
  });

  describe("getCurrentBook", () => {
    test("should return null if the requested book doesn't exist", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 3);
      expect(viewer.getCurrentBook()).toBe(null);
    });

    test("should return the book that is position defined in the index", () => {
      const book1 = Book.create(1, "Clean code");
      const book2 = Book.create(2, "Implementing DDD");
      const books = [book1, book2];
      const viewer = BookViewer.create(books, 1);
      const currentBook = viewer.getCurrentBook();
      expect(currentBook).toEqual(book2);
    });
  });
});
