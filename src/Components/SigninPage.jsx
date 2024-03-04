import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../Components/SigninPage.css";
const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useNavigate();

  const handleLogin = () => {
    // if (!localStorage.getItem(email)) {
    //   history.push("/RegisterPage");
    // } else if (localStorage.getItem(email) === password) {
    //   history.push("/ContentPage");
    // }
  };
  return (
    <div className="signin">
      <div className="title-text">
        <h1>Lets get started now!</h1>
        <p>or create an account if not registered yet</p>
      </div>
      <div className="form-container">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label> Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn" onClick={handleLogin}>
          Sign in
        </button>
        <p className="paraText">Forget Password?</p>
      </div>
    </div>
  );
};

export default SigninPage;
