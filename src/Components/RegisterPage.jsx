import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/RegisterPage.css";
const RegisterPage = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    dates: "",
  });

  const history = useNavigate();

  const [data, setData] = useState([]);
  // console.log(inputValue);
  const handleRegister = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);

    setInputValue(() => {
      return { ...inputValue, [name]: value };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    const { name, lastName, country, email, password, confirmPassword, dates } =
      inputValue;
    if (password != confirmPassword) {
      alert("Password does not match");
    } else if (password === "") {
      alert("password field is required");
    } else {
      localStorage.setItem(
        "RegisteredUsers",
        JSON.stringify([...data, inputValue])
      );
      history("/");
    }
  };
  return (
    <div className="App">
      <h2>Register</h2>
      <hr />
      <div className="registerForm">
        <label>
          {" "}
          Name:
          <input type="text" name="name" onChange={handleRegister} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" onChange={handleRegister} />
        </label>

        <label>
          Country <input type="text" name="country" onChange={handleRegister} />
        </label>

        <label>
          Email: <input type="email" name="email" onChange={handleRegister} />
        </label>

        <label>
          Password:{" "}
          <input type="password" name="password" onChange={handleRegister} />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            onChange={handleRegister}
          />
        </label>

        <br />
      </div>
      <div className="dob">
        <input type="date" name="date" onChange={handleRegister} />
      </div>

      <button className="btn" onClick={addData}>
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
