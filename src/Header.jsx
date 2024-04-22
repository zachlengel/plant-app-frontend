import { useState, useEffect } from "react";
import { LoginModal } from "./LoginModal";
import { LogoutLink } from "./Logout";
import "./index.css";

export function Header() {
  const [isLoginShowVisible, setIsLoginShowVisible] = useState(false);

  const handleCloseLogin = () => {
    console.log("handleCloseLogin");
    setIsLoginShowVisible(false);
  };

  const handleShowLogin = () => {
    console.log("handleShowLogin");
    setIsLoginShowVisible(true);
  };

  return (
    <header>
      <nav>
        <a href="http://localhost:5173/">
          <h1 className="brand">GrowPro</h1>
        </a>
        <div id="navbar">
          <ul>
            <li>
              <button className="header-buttons" onClick={() => handleShowLogin()}>
                Login/Signup
              </button>
            </li>
            <li>
              <a href="http://localhost:5173/plants">
                <button className="header-buttons">All Plants</button>
              </a>
            </li>
            <li>
              <a href="http://localhost:5173/schedules">
                <button className="header-buttons">Your Plants</button>
              </a>
            </li>
            <LoginModal show={isLoginShowVisible} onClose={handleCloseLogin} />
            <li>
              <LogoutLink />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
