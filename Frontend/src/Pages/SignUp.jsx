import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (!name || !email || !password) {
      return alert("All fields are required");
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(res);
      if (res.data.success) {
        alert(res.data.message);
        Navigate("/login");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      alert(errorMessage); // Alerting the error message
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>SignUp</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={user.name}
            autoFocus
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={user.email}
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
            value={user.password}
            autoFocus
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">SignUp</button>
        <span>
          Already have an account ?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
