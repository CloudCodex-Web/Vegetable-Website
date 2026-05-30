import React, { useState } from "react";
import { FiSearch, FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between py-5 px-6 md:px-10 bg-white z-50 shadow-md">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold cursor-pointer">
          BuyNest.
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 text-black font-medium">
          <li className="hover:text-orange-400 cursor-pointer transition duration-300">
            <a href="#home">Home</a>
          </li>

          <li className="hover:text-orange-400 cursor-pointer transition duration-300">
            <a href="#shop">Shop</a>
          </li>

          <li className="hover:text-orange-400 cursor-pointer transition duration-300">
            <a href="#categories">Categories</a>
          </li>

          <li className="hover:text-orange-400 cursor-pointer transition duration-300">
            <a href="#deals">Deals</a>
          </li>

          <li className="hover:text-orange-400 cursor-pointer transition duration-300">
            <a href="#new-arrivals">New Arrivals</a>
          </li>

          <li className="hover:text-orange-400 cursor-pointer transition duration-300">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-orange-400 cursor-pointer transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-3 w-[280px] border">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 outline-none bg-transparent text-black"
            />

            <FiSearch className="text-black text-xl cursor-pointer" />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FiShoppingCart className="text-2xl hover:text-orange-500 transition duration-300" />
          </div>
          {/* Login Button  */}
          <div>
            <button
              className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => alert("Login feature is coming soon 🚀")}>
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            {menuOpen ? (
              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
            <div className="flex flex-col items-center gap-6 py-8 text-black font-medium">
              {/* Mobile Search */}
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-[90%] border">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 outline-none bg-transparent text-black"
                />

                <FiSearch className="text-black text-xl cursor-pointer" />
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col items-center gap-6">
                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="#home">Home</a>
                </li>

                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="#shop">Shop</a>
                </li>

                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="#categories">Categories</a>
                </li>

                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="#deals">Deals</a>
                </li>

                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="#new-arrivals">New Arrivals</a>
                </li>

                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="#about">About</a>
                </li>

                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
