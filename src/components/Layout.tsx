"use client";
import NavBar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Navbar */}
        <NavBar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-(--primary-background-color) lg:px-8 px-4">
          {/* Outlet fallback safety */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
