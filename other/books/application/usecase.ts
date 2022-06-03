import { BookViewer } from '../domain/book-viewer.aggregate-root';

export interface UseCase {
  run: () => Promise<BookViewer>;
}
