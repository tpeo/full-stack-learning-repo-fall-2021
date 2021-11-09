import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="title-text">Todo App</h1>
      <div className="link-container">
        <div className="link">
          <Link className="header-link" to="/">
            Home
          </Link>
        </div>
        <div className="link">
          <Link className="header-link" to="/login">
            Login
          </Link>
        </div>
        <div className="link">
          <Link className="header-link" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
