import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <footer>
      <p>
        <a href="https://github.com/zachlengel?tab=repositories" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/zach-engel97/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            alt="Linkedin"
          />
        </a>
        <ButtonMailto label="E-Mail Me" mailto="mailto:no-reply@example.com" />
      </p>
    </footer>
  );
}
