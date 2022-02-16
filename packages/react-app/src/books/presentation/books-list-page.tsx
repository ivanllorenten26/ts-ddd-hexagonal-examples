import React, { useState } from "react";

const BooksListPage = () => {
  const [books, setBooks] = useState();
  return (
    <>
      <h1>Books list page</h1>
      <div>
        <button>Load Books</button>
        <button>Prev</button>
        <button>Next</button>
      </div>
      <div></div>
    </>
  );
};

export default BooksListPage;
