import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };
  
  return (
    <div className="container">
      <h1>Login</h1>

      <form>
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
        <button type="submit">SignUp</button>
        <span>
          Dont have an account ?<Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
