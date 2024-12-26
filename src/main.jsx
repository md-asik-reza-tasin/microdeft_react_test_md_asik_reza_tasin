import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";

const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
