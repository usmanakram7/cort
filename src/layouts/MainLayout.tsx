import React from "react";
import Navbar from "../app/components/Navbar";
import { Outlet } from "react-router-dom";
import Dashboard from "../app/views/main/Dashboard";
import Header from "../app/components/Header";

export const MainLayout = () => {
  return (
    <>
      <div className="w-full  p-[10px] flex gap-[13px]">
        <div className="main-navbar">
          <Navbar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="mb-[13px]">
            <Header />
          </div>
          <div className=" w-full overflow-auto layout-outlet ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
