import React from "react";
import Headers from "../Pages/Headers/Headers";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative overflow-hidden">
      <Headers></Headers>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
