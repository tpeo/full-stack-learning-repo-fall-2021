import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LoginLink from "../../components/Login/Login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main-container">
      <h1>Login</h1>
      <input
        className="input"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <input
        className="input"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <button className="button">Login</button>
      <Link className="signup-link" to="/signup">
        Signup
      </Link>
      <h1>Or Sign Up With Google</h1>
      <LoginLink />
    </div>
  );
}
