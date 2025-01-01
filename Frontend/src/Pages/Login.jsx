import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email || !password) {
      return alert("All fields are required");
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        login,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const data = res.data;
      console.log("Api response:", data);

      if (data?.token && data?.data?.name) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.data.name);
        alert(res.data.message);
        Navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={login.email}
            autoFocus
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={login.password}
            autoFocus
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
        <span>
          Dont have an account ?<Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
