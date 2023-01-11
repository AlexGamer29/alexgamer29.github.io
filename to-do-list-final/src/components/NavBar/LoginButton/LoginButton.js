import React from "react";
import { Link } from "react-router-dom";

import "./LoginButton.css";

export default function LoginButton() {
  return (
    <Link to="login" className="login__btn__container">
      <div className="btn__container">
        <button className="btn__login">Login</button>
      </div>
    </Link>
  );
}
