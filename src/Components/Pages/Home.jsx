import React from "react";
import ContentPage from "../ContentPage";
import "./Pages.css";
function Home() {
  return (
    <div>
      <ContentPage />
      <div className="container-text">
        <h1 className="home-title">Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, non?
          Vel tempore sit deserunt nisi temporibus dolorem soluta omnis. Officia
          tempore voluptates accusantium. Magni, enim.
        </p>
      </div>
    </div>
  );
}

export default Home;
