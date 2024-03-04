import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./Components/RegisterPage";

import SigninPage from "./Components/SigninPage";
import ContentPage from "./Components/ContentPage";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/ContentPage" element={<ContentPage />} />
      </Routes>
    </>
  );
  // <SigninPage />;
}

export default App;
