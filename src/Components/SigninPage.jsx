import React, { useState } from "react";
import { FaHatCowboy } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Components/SigninPage.css";
const SigninPage = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const [data, setData] = useState([]);
  // console.log(inputValue);
  const handleLogin = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);

    setInputValue(() => {
      return { ...inputValue, [name]: value };
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    const getUser = localStorage.getItem("RegisteredUsers");
    console.log(getUser);
    const { email, password } = inputValue;
    if (email === "") {
      alert("email field is required");
    } else if (password === "") {
      alert("password field is required");
    } else {
      if (getUser && getUser.length) {
        const userData = JSON.parse(getUser);
        const userLogin = userData.filter((el, i) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("Invalid Details");
        } else {
          history("/ContentPage");
          console.log("login successful");
        }
      }
    }
    // localStorage.setItem(
    //   "RegisteredUsers",
    //   JSON.stringify([...data, inputValue])
    // );
  };
  return (
    <div className="signin">
      <div className="title-text">
        <h1>Lets get started now!</h1>
        <p>
          or <Link to="/RegisterPage">create an account </Link> if not
          registered yet
        </p>
      </div>
      <div className="form-container">
        <div className="icon-section">
          <FaHatCowboy />
        </div>
        <label>
          Email: <input type="email" name="email" onChange={handleLogin} />
        </label>

        <label>
          {" "}
          Password:
          <input type="password" name="password" onChange={handleLogin} />
        </label>

        <button className="btn" onClick={handleSignIn}>
          Sign in
        </button>
        <p className="paraText">Forget Password?</p>
      </div>
    </div>
  );
};

export default SigninPage;
