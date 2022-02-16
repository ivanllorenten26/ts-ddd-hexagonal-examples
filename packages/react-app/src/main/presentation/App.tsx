import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import { HeaderMenu, Layout } from "./components";
import ExampleRoutes from "./routes";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Layout>
          <HeaderMenu />
          <ExampleRoutes />
        </Layout>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
