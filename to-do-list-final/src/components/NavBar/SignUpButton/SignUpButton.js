import React from "react";
import { Link } from "react-router-dom";

import "./SignUpButton.css";

export default function SignUpButton() {
  return (
    <Link to="sign-up" className="signup__btn__container">
      <div className="btn__container">
        <button className="btn__signup">Signup</button>
      </div>
    </Link>
  );
}
