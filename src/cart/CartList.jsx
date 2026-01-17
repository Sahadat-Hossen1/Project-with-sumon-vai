import React, { useEffect } from "react";

export default function CartList() {
  
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      
      {/* Cart Item */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
        <img
          src="https://via.placeholder.com/150"
          alt="product"
          className="w-20 h-20 rounded-xl object-cover"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">Wireless Headphone</h3>
          <p className="text-gray-500">৳ 1200</p>

          <div className="flex items-center gap-3 mt-2">
            <button className="w-8 h-8 bg-gray-200 rounded-full">-</button>
            <span className="font-medium">1</span>
            <button className="w-8 h-8 bg-gray-200 rounded-full">+</button>
          </div>
        </div>

        <div className="text-right">
          <p className="font-semibold">৳ 1200</p>
          <button className="text-red-500 text-sm mt-2">
            Remove
          </button>
        </div>
      </div>

      {/* Cart Item */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
        <img
          src="https://via.placeholder.com/150"
          alt="product"
          className="w-20 h-20 rounded-xl object-cover"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">Smart Watch</h3>
          <p className="text-gray-500">৳ 2500</p>

          <div className="flex items-center gap-3 mt-2">
            <button className="w-8 h-8 bg-gray-200 rounded-full">-</button>
            <span className="font-medium">2</span>
            <button className="w-8 h-8 bg-gray-200 rounded-full">+</button>
          </div>
        </div>

        <div className="text-right">
          <p className="font-semibold">৳ 5000</p>
          <button className="text-red-500 text-sm mt-2">
            Remove
          </button>
        </div>
      </div>

    </div>
  );
}
