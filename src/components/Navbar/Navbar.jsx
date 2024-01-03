import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
//react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
// import { AuthContext } from "../../Context/ReactContext";

const Navbar = () => {
  //state updation
  const [isMenu, setMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);
  // const { user } = useContext(AuthContext);
  // console.log(user);

  //toggle menu
  const toggleMenu = () => {
    setMenu(!isMenu);
  };

  //useeffect to handle error
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //navItem links
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
    { link: "About", path: "/about" },
  ];
  return (
    <header className="nav-header">
      {/* {`navbar ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`} */}
      <nav className="navbar">
        <div className="navbar-items">
          <Link to="/" className="books">
            <FaBlog className="inline-block" />
            Books
          </Link>
          <ul className="unorder-list">
            {navItems.map(({ link, path }) => (
              <div className="nav-links">
                <Link key={path} to={path}>
                  {link}
                </Link>
              </div>
            ))}
          </ul>
          {/* button for large devices */}
          <div className="large-btn">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>
          {/* button for mobile devices */}
          <div className="small-btn">
            <button onClick={toggleMenu}>
              {isMenu ? (
                <FaXmark className="h-5 w-5 text-black focus:outline-none" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-20 py-7 bg-blue-700 ${
            isMenu ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <div className="nav-links">
              <Link key={path} to={path}>
                {link}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
