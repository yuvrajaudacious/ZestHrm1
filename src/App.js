import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Background";
import Sidebar from "./Dashboard/Sidebar/Index";
import SignUp from "./Page/SignUp/Index";
import Varicode from "./Page/Validation/Varifaction/Index";
import User from "./Dashboard/Profile/User";
import Adduser from "./Page/Adduser";
import Setpassword from "./Page/Validation/Varifaction/setpassword";
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
      path: "/about",
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
