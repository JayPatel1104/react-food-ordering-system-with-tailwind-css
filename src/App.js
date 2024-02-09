import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const Applayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout></Applayout>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Body></Body> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
