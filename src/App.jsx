import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./Components/RegisterPage";

import SigninPage from "./Components/SigninPage";
import ContentPage from "./Components/ContentPage";
import Home from "./Components/Pages/Home";
import Blog from "./Components/Pages/Blog";
import About from "./Components/Pages/About";
import Product from "./Components/Pages/Product";
import Support from "./Components/Pages/Support";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/ContentPage" element={<ContentPage />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/support" element={<Support />} />
      </Routes>
    </>
  );
  // <SigninPage />;
}

export default App;
