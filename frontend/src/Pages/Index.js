import React from "react";
import NavBar from "../components/home/NavBar";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Index;
