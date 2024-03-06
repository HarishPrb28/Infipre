import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

import "./ContentPage.css";
const ContentPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useNavigate();

  const handleLogout = () => {
    history("/");
  };
  return (
    <>
      <nav>
        <Link to="/" className="title">
          BrandName
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>

      <div className="icon">
        <IoMdExit onClick={handleLogout} />
      </div>
    </>
  );
};

export default ContentPage;
