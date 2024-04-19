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
      <nav id="navbar">
        <h1>GrowPro</h1>
        <ul>
          <li>
            <a onClick={() => handleShowLogin()}>More info</a>
          </li>
          <LoginModal show={isLoginShowVisible} onClose={handleCloseLogin} />
          <li>
            <LogoutLink />
          </li>
        </ul>
      </nav>
    </header>
  );
}
