import React, { useContext, useState } from "react";

import { AuthContext } from "../../Context/ReactContext";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../SideBar/SideBar.css";
import { Sidebar } from "flowbite-react";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { BiBuoy } from "react-icons/bi";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

import userImage from "../../images/profile.jpg";

const SideBar = () => {
  const [error, setError] = useState("");
  const { logout, user } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/signup";

  //logout
  const onClickLogout = () => {
    logout()
      .then(() => {
        alert("logout successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="sidebar-bg">
      <Sidebar
        aria-label="Sidebar with content separator example"
        className="bg"
      >
        <Sidebar.Logo
          href="/"
          img={user?.photoURL || userImage}
          imgAlt="User logo"
          className="w-15 h-15 rounded"
        >
          <p className=""> {user?.displayName || "Guest login"}</p>
        </Sidebar.Logo>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={FaHouseChimneyUser}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Book
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>

            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              <button onClick={onClickLogout}>Log out</button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
