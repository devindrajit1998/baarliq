import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/5 bg_sidebar">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Navbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
