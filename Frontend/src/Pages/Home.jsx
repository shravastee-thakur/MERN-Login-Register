import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("name"));
  }, []);
  return (
    <div>
      <h1>Welcome, {loggedInUser}</h1>

      <button
        onClick={() => {
          localStorage.clear(), Navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
