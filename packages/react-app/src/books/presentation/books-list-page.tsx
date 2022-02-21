import React, { useState } from "react";
import { BooksFetcher } from "../application/books-fetcher";
import { NextBookLoader } from "../application/next-book-loader";
import { PrevBookLoader } from "../application/prev-book-loader";
import { BookViewer } from "../domain/book-viewer.aggregate-root";

const getInitialState: () => BookViewer = () => {
  const cmd = new BooksFetcher();
  return cmd.run();
  // return viewer;
};

const BooksListPage = () => {
  const [viewer, setViewer] = useState<BookViewer>(getInitialState());

  const handlePrev = () => {
    const cmd = new PrevBookLoader(viewer);
    setViewer(cmd.run());
  };

  const handleNext = () => {
    const cmd = new NextBookLoader(viewer);
    setViewer(cmd.run());
  };

  return (
    <>
      <h1>Books list page</h1>
      <div>
        {/* <button onClick={handleFetch}>Load Books</button> */}
        <button onClick={handlePrev} disabled={!viewer.isPrevEnabled()}>
          Prev
        </button>
        <button onClick={handleNext} disabled={!viewer.isNextEnabled()}>
          Next
        </button>
      </div>
      <div>
        <div>{viewer.getCurrentBook()?.id}</div>
        <div>{viewer.getCurrentBook()?.title}</div>
      </div>
    </>
  );
};

export default BooksListPage;
