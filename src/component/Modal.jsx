import React from "react";
import CartList from "../cart/CartList";

export default function Modal({ children }) {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#191818c6] z-10  fixed top-0 left-0  ">
        {/* {children} */}
        <div className="w-1/2 h-80 bg-white z-50 overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {children}
      </div>
      </div>
      
    </>
  );
}
