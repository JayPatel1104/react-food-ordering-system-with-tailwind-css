import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Log In");
  const onlineStatus = useOnlineStaus();

  useEffect(() => {}, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={LOGO_URL} className="img-logo"></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
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
          <li>{onlineStatus ? "✅" : "🔴"} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
