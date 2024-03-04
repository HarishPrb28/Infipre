import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

import "./ContentPage.css";
const ContentPage = () => {
  const history = useNavigate();

  const handleLogout = () => {
    history("/");
  };
  return (
    <>
      <nav>
        <h1 className="logoText">
          {" "}
          <Link to="/home">Brand Name</Link>
        </h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
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
