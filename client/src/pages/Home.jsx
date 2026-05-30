import React from "react";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen bg-white flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <p className="text-orange-500 font-semibold mb-4">Best Online Grocery Store</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Discover Your Perfect Products Online
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Shop the latest trends with premium quality products, fast delivery, and unbeatable
            prices all in one place.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Shop Now
            </button>

            <button className="border-2 border-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={hero}
            alt="shopping"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
