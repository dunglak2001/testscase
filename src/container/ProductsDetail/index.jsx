import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTER_APP } from "../../router/constants";

import "./ProductsDetail.css";
export default function ProductsDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <ul className="sub-nav">
        <li
          className={`sub-item ${
            location.pathname === ROUTER_APP.PRODUCT_PC ? "active" : ""
          }`}
          onClick={() => navigate(ROUTER_APP.PRODUCT_PC)}
        >
          PC
        </li>
        <li
          className={`sub-item ${
            location.pathname === ROUTER_APP.PRODUCT_TABLET ? "active" : ""
          }`}
          onClick={() => navigate(ROUTER_APP.PRODUCT_TABLET)}
        >
          TABLET
        </li>
        <li
          className={`sub-item ${
            location.pathname === ROUTER_APP.PRODUCT_MOBILE ? "active" : ""
          }`}
          onClick={() => navigate(ROUTER_APP.PRODUCT_MOBILE)}
        >
          MOBILE
        </li>
      </ul>
    </div>
  );
}
