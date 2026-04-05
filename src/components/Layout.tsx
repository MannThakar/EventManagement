"use client";
import NavBar from "@/components/common/Navbar";

import React from "react";
import Sidebar from "./common/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <NavBar />
        <main className="flex-1 overflow-y-auto bg-(--primary-background-color) lg:px-8 px-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
