import React from 'react'

export default function ProductItem() {

  return (
    <div>
        <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3-15amn8/ideapad-slim-3-15amn8-0001-228x228.webp" alt="" />
        <div>
            <h1 className='text-xl'>Lenovo IdeaPad Slim 3 15AMN8 Ryzen 3 7320U 15.6" FHD Laptop Abyss Blue</h1>
            <ul className='list-disc'>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto?</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto?</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto?</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto?</li>
            </ul>
            <h2>Price:90000tk</h2>
            <button className='bg-green-500 text-white block my-2 w-full cursor-pointer rounded-2xl p-2 '>Buy Now</button>
            <button className='bg-green-500 text-white block my-2 w-full cursor-pointer rounded-2xl p-2 '>Add to Cart</button>
        </div>
    </div>
  )
}
