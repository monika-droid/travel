// Monika patel
//Fuzail khan

import React, { useEffect, useState } from "react";
import "../style/style.css";
import logo from "../images/plane.svg"; 
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const isActive = (path) => location.pathname === path;

  const isDarkNav = ["/contact", "/destination", "/blogs"].includes(location.pathname);

  return (
    <nav className={`navbar ${sticky || isDarkNav ? "dark-nav" : ""}`}>
      <div className="navbar-brand">
        <img src={logo} alt="Tripster Logo" className="logo" />
        <span className="app-name">Tripster</span>
      </div>
      <ul>
       <div className="ni">
       <li className={isActive("/") ? "active-link" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive("/destination") ? "active-link" : ""}>
          <Link to="/destination">Destinations</Link>
        </li>
        <li className={isActive("/blogs") ? "active-link" : ""}>
          <Link to="/blogs">Blogs</Link>
        </li>
       </div>
        <li className={isActive("/contact") ? "active-link" : ""}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
