import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import About from "./About";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
// import Instamart from "./components/Instamart";
const Instamart=lazy(()=>import("./components/Instamart"))

const AppLayout = () => {
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
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:'/insta',
        element:<Suspense fallback={<h1>pleasewait.....</h1>}><Instamart/></Suspense>
      },
      {
        path :'/restaurents/:resid',
        element:<RestaurentMenu></RestaurentMenu>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>);
