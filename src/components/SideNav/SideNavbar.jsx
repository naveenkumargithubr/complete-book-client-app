import React, { useContext, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import "./SideNavbar.css";
import { AuthContext } from "../../Context/ReactContext";
import userImg from "../../images/profile.jpg";

import { useLocation, useNavigate, Link } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";

const SideNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const [error, setError] = useState("");
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
        res.status(404).json({ error: "logout failed" });
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="sidenav-container">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          {/* <img
            src={user?.photoURL || userImg}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <p>{user?.displayName || "Guest login"}</p>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user?.photoUrl || userImg}
                rounded
              />
            }
            className="nav-main"
          >
            <Dropdown.Header>
              <span className="block text-sm">
                <p>{user?.displayName || "Guest login"}</p>
              </span>
              <span className="block truncate text-sm font-medium">
                <p>{user?.email || "Guest login"}</p>
              </span>
            </Dropdown.Header>
            <Link to="/admin/dashboard">
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>

            <Link to="/login">
              <Dropdown.Item>Sign In</Dropdown.Item>
            </Link>
            <Dropdown.Item>Users</Dropdown.Item>
            <Dropdown.Divider />

            <Dropdown.Item onClick={onClickLogout}>Log Out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="side-nav">
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/admin/dashboard/upload">Upload book</Navbar.Link>
          <Navbar.Link href="/admin/dashboard/manage">Manage Book</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* <Dashboard /> */}
    </div>
  );
};

export default SideNavbar;
