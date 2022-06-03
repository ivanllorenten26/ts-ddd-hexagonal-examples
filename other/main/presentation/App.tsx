import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import { HeaderMenu, Layout } from './components';
// import ExampleRoutes from './routes';
// import BooksListPage from '../../books/presentation/books-list-page';

const App = () => (
  <>
    {/* <BrowserRouter> */}
    <Layout>
      <HeaderMenu />
      {/* <ExampleRoutes /> */}
      {/* <BooksListPage /> */}
      Content
    </Layout>
    {/* </BrowserRouter> */}
  </>
);

export default App;
