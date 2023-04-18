import React from "react";
import Main from "../../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import CommonCard from "../../Pages/Shared/CommonCard/CommonCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        loader: ({ params }) => {
          return fetch(
            `https://travel-guru-server-sable.vercel.app/categories/${params.id}`
          );
        },
        path: "/:id",
        element: <CommonCard></CommonCard>,
      },
    ],
  },
]);
