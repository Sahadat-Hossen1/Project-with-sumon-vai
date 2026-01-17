import React from "react";

export default function ProductItem({ product }) {
  const { id, image, title, price, details = [] } = product;

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h1 className="text-xl">{title} </h1>
        <ul className="list-disc">
          {details.map((item, index) => (
            <li key={index}>{item} </li>
          ))}
        </ul>
        <h2>Price:{price}tk</h2>
        <button className="bg-green-500 text-white block my-2 w-full cursor-pointer rounded-2xl p-2 ">
          Buy Now
        </button>
        <button className="bg-green-500 text-white block my-2 w-full cursor-pointer rounded-2xl p-2 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
