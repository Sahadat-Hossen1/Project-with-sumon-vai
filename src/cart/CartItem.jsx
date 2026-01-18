import React from 'react'

export default function CartItem({cart}) {
  const {id,image,title,price,quantity}=cart
  
  return (
    <div>
      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 rounded-xl object-cover"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">৳ {price}</p>

          <div className="flex items-center gap-3 mt-2">
            <button className="w-8 h-8 bg-gray-200 rounded-full">-</button>
            <span className="font-medium">{quantity}</span>
            <button className="w-8 h-8 bg-gray-200 rounded-full">+</button>
          </div>
        </div>

        <div className="text-right">
          <p className="font-semibold">{price*quantity} </p>
          <button className="text-red-500 text-sm mt-2">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
