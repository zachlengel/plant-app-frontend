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
        <h1 className="brand">GrowPro</h1>
        <div id="navbar">
          <ul>
            <li>
              <button className="header-buttons" onClick={() => handleShowLogin()}>
                Login/Signup
              </button>
            </li>
            <li>
              <button className="header-buttons">Your Plants</button>
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
