import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-bold text-orange-400">Shopora</h1>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Your trusted destination for modern shopping, premium products, and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-orange-400 cursor-pointer transition">Home</li>

            <li className="hover:text-orange-400 cursor-pointer transition">Shop</li>

            <li className="hover:text-orange-400 cursor-pointer transition">Categories</li>

            <li className="hover:text-orange-400 cursor-pointer transition">Deals</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-orange-400 cursor-pointer transition">Contact Us</li>

            <li className="hover:text-orange-400 cursor-pointer transition">FAQ</li>

            <li className="hover:text-orange-400 cursor-pointer transition">Privacy Policy</li>

            <li className="hover:text-orange-400 cursor-pointer transition">Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>

          <p className="text-gray-400 mb-4">Subscribe to get latest updates and offers.</p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-l-lg text-black outline-none"
            />

            <button className="bg-orange-400 px-5 rounded-r-lg font-semibold hover:bg-orange-500 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 BuyNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
