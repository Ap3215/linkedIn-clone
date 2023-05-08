import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Main;
