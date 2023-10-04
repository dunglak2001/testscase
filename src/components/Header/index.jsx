import React from "react";
import "./Header.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ROUTER_APP } from "../../router/constants";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <ul className="header-list">
        <li
          className={`header-list-item ${
            location.pathname === ROUTER_APP.HOME ? "active" : ""
          }`}
          onClick={() => navigate(ROUTER_APP.HOME)}
        >
          Home
        </li>
        <li
          className={`header-list-item ${
            location.pathname === ROUTER_APP.ABOUT ? "active" : ""
          }`}
          onClick={() => navigate(ROUTER_APP.ABOUT)}
        >
          About
        </li>
        <li
          className={`header-list-item navigation ${
            location.pathname === ROUTER_APP.PRODUCT ? "active" : ""
          }`}
          onClick={() => navigate(ROUTER_APP.PRODUCT)}
        >
          Products
        </li>

        <li
          className={`header-list-item ${
            location.pathname === ROUTER_APP.CONTACT ? "active" : ""
          }`}
          onClick={() => navigate(ROUTER_APP.CONTACT)}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
