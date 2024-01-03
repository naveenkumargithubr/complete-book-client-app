import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";
import SideNavbar from "../SideNav/SideNavbar";
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
