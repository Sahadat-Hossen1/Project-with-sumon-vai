import React from "react";
import ProductList from "./component/ProductList";
import NoProductFound from "./component/NoProductFound";
import ErrorCart from "./component/ErrorCart";
import Header from "./component/Header";
import Modal from "./component/Modal";
import CartList from "./cart/CartList";

export default function App() {
  return (
    <div className="">
      <Header />
      <ProductList />
    </div>
  );
}
