import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../SideNav/SideNavbar";
import SideBar from "../Sidebar/SideBar.jsx";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SideNavbar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
