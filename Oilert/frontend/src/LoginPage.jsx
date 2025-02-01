// /client/src/LoginPage.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((response) => {
        if (response.status === 200) {
          history.push("/main");
        }
      })
      .catch((error) => {
        alert("Login failed!");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => history.push("/create-car")}>Create User</button>
    </div>
  );
}

export default LoginPage;
