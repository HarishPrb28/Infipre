import React from "react";
import { useNavigate } from "react-router-dom";

const ContentPage = () => {
  const history = useNavigate();

  const handleLogout = () => {
    history.push("/SigninPage");
  };
  return (
    <div>
      <h1>Content Page</h1>
      <nav>
        <h1>Brand Name</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>
      </nav>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ContentPage;
