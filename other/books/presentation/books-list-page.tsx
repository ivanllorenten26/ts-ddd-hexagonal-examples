import React from 'react';

import { NextBookLoader } from '../application/next-book-loader';
import { PrevBookLoader } from '../application/prev-book-loader';
import useBookViewer from './hooks/use-get-books';

const BooksListPage = () => {
  const { isLoading, viewer, setViewer } = useBookViewer();

  const handlePrev = async () => {
    if (!viewer) return;
    const cmd = new PrevBookLoader(viewer);
    setViewer(await cmd.run());
  };

  const handleNext = async () => {
    if (!viewer) return;
    const cmd = new NextBookLoader(viewer);
    setViewer(await cmd.run());
  };

  if (isLoading) <div>Loading</div>;
  // if (!viewer) <div>Error loading books</div>;

  return (
    <>
      <h1>Books list page</h1>
      <div>
        {/* <button onClick={handleFetch}>Load Books</button> */}
        <button onClick={handlePrev} disabled={!viewer?.isPrevEnabled()}>
          Prev
        </button>
        <button onClick={handleNext} disabled={!viewer?.isNextEnabled()}>
          Next
        </button>
      </div>
      <div>
        <div>{viewer?.getCurrentBook()?.id}</div>
        <div>{viewer?.getCurrentBook()?.title}</div>
      </div>
    </>
  );
};

export default BooksListPage;
