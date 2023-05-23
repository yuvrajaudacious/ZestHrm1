import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Background";
import SignUp from "./Page/SignUp/Index";
import Varicode from "./Page/Validation/Varifaction/Index";
import Adduser from "./Page/Adduser";
import Setpassword from "./Page/Validation/Varifaction/setpassword";
import Sidebar from "./Dashboard/Sidebar/Index";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <Adduser />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    
    {
      path: "/Varicode",
      element: <Varicode />,
    },
    {
      path: "/dashboard",
      element: <Sidebar />,
    },
    {
      path: "/setpassword",
      element: <Setpassword />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
