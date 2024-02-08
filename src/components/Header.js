import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Log In");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="img-logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <button
              className="login-button"
              onClick={() => {
                if (btnName === "Log In") {
                  setBtnName("Log Out");
                } else {
                  setBtnName("Log In");
                }
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
