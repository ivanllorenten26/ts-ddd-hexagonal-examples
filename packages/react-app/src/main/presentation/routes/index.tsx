import React from "react";
import { Routes, Route } from "react-router-dom";
import BooksListPage from "../../../books/presentation/books-list-page";
import { CounterPage } from "../../../counter/presentation/components";

const ExampleRoutes = () => {
  return (
    <Routes>
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/books" element={<BooksListPage />} />
    </Routes>
  );
};

export default ExampleRoutes;
