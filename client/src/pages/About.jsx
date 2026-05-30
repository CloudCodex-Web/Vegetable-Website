import React from "react";
import AboutImage from "../assets/AboutImage.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={AboutImage}
              alt="Fresh Vegetables"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-orange-500 font-semibold">About BuyNest.</span>

            <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-6">
              Fresh Vegetables Delivered Straight From The Farm
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              We provide fresh, healthy, and high-quality vegetables, fruits, and grocery essentials
              directly from trusted local farmers.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to make healthy eating easier by delivering farm-fresh products to your
              doorstep at affordable prices.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-orange-50 p-4 rounded-xl">🌱 100% Fresh Products</div>

              <div className="bg-orange-50 p-4 rounded-xl">🚚 Fast Delivery</div>

              <div className="bg-orange-50 p-4 rounded-xl">💰 Affordable Prices</div>

              <div className="bg-orange-50 p-4 rounded-xl">❤️ Trusted By Customers</div>
            </div>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
