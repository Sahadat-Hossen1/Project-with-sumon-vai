import React, { useState } from "react";
import CartList from "../cart/CartList";

export default function Modal({ children, }) {


  return (
    show && (
      <div
        onClick={handleClose}
        className="w-full h-[100vh] bg-[#191818c6] z-10  fixed justify-between top-0 left-0  "
      >
        {/* {children} */}

        <div
          onClick={(e) => e.stopPropagation()}
          className="w-2/3 h-[400px] bg-white z-10  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative "
        >
          <div className="absolute -top-8 -right-3 z-40 w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center ">
            <button onClick={handleClose} className="text-4xl ">
              x
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}
