import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import Modal from "./Modal";
import CartList from "../cart/CartList";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
    <div className="w-full h-[50px] bg-amber-300 shadow-2xl flex justify-evenly items-center ">
      <h1>Logo </h1>
      <nav>
        <ul className="flex space-x-2">
          <li className="">Home</li>
          <li>Products</li>
        </ul>
      </nav>
      <div className="flex space-x-3">
        <div className=" relative">
          <FaShoppingCart onClick={()=>console.log("clicked")} className="w-6 h-6" />
          <span className=" absolute -top-[14px]  left-4 bg-red-600 px-0.5 rounded-full"> 1</span>
        </div>
        <FaUserAlt />
      </div>
    </div>
          <Modal>
        <CartList/>
      </Modal>
   </>
  );
}
