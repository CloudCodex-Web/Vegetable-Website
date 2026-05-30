import React from "react";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
const products = [
  {
    id: 1,
    image: product1,
    name: "Fresh Potatoes",
    price: "NPR 70",
  },
  {
    id: 2,
    image: product2,
    name: "Fresh Carrots",
    price: "NPR 90",
  },
  {
    id: 3,
    image: product3,
    name: "Fresh Spinach",
    price: "NPR 50",
  },
  {
    id: 4,
    image: product4,
    name: "Fresh Broccoli",
    price: "NPR 120",
  },
  {
    id: 5,
    image: product5,
    name: "Fresh Cauliflower",
    price: "NPR 60",
  }
];

const Shop = () => {
  return (
    <section id="shop" className="py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-orange-500 font-semibold">Our Products</p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Featured Products</h1>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition duration-300">
            {/* Image Box */}
            <div className="bg-gray-100 h-[280px] flex items-center justify-center p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>

              <p className="text-orange-500 text-lg font-bold mt-2">{product.price}</p>

              <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
