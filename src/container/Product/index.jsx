import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import ProductsDetail from "../ProductsDetail";
export default function Product() {
  return (
    <div style={{ background: "pink", height: "100vh" }}>
      <Header />
      <ProductsDetail />
      <Outlet />
      Product
    </div>
  );
}
