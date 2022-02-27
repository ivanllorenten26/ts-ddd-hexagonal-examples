import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BooksFetcher } from "../../application/books-fetcher";
import { BookViewer } from "../../domain/book-viewer.aggregate-root";

export type UseBookViewer = {
  isLoading: boolean;
  viewer: BookViewer | null;
  setViewer: Dispatch<SetStateAction<BookViewer | null>>;
};

const useBookViewer: () => UseBookViewer = () => {
  const [viewer, setViewer] = useState<BookViewer | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getInitialState() {
      const cmd = new BooksFetcher();
      setViewer(await cmd.run());
      setLoading(false);
    }
    getInitialState();
  }, []);
  return { isLoading, viewer, setViewer };
};

export default useBookViewer;
