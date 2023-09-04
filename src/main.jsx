import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { RecipeLayout } from "./pages/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
/*import { FullRecipe } from "./components/FullRecipe";*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/layout/:item", element: <RecipeLayout /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
