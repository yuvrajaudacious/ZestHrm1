import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Background";
import Sidebar from "./Dashboard/Sidebar/Index";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <Sidebar />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
