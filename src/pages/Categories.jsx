import React, { useState } from "react";
// Importing Images From Assets //
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";


const Categories = () => {

  /* ---------------- CATEGORIES ---------------- */
  const categories = [
    "All",
    "Fresh Vegetables",
    "Fresh Fruits",
    "Leafy Greens",
    "Organic",
    "Herbs & Spices",
    "Dairy & Eggs",
    "Grocery Essentials",
  ];

  /* ---------------- PRODUCTS ---------------- */
  const products = [
    { id: 1, name: "Potato", category: "Fresh Vegetables", price: 100, product: product1 },
    { id: 2, name: "Carrot", category: "Fresh Vegetables", price: 80, product: product2 },
    { id: 3, name: "Spinach", category: "Fresh Vegetables", price: 250, product: product3 },
    { id: 4, name: "Broccoli", category: "Fresh Vegetables", price: 120, product: product4 },
    { id: 5, name: "Cauliflower", category: "Leafy Greens", price: 60, product: product5 },
    { id: 7, name: "Milk", category: "Dairy & Eggs", price: 90, product: product6 },
    { id: 8, name: "Eggs", category: "Dairy & Eggs", price: 200, product: product7 },
    { id: 9, name: "Rice", category: "Grocery Essentials", price: 500, product: product8 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <section id="categories" className="w-full py-16 bg-white">
      {/* TITLE */}
      <div className="text-center mb-10">
        <p className=" text-orange-600 font-semibold">Our Categories</p>
        <h2 className="text-3xl font-bold text-gray-800">Shop by Categories</h2>
        <p className="text-gray-500 mt-2">Click a category to explore products</p>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition text-sm
              ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            {/* IMAGE */}
            <div className="bg-white h-[130px] flex items-center justify-center p-3">
              <img
                src={item.product}
                alt={item.name}
                className="h-[90px] w-auto object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="p-3 text-center">
              <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>

              <p className="text-xs text-gray-500 mt-1">{item.category}</p>

              <p className="text-orange-500 font-bold mt-2 text-sm">NPR {item.price}</p>

              <button className="mt-3 w-full bg-orange-500 text-white py-1.5 text-xs rounded-md hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
