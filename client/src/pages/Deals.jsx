import React from "react";

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "Vegetable Pack",
      items: "Tomato, Potato, Onion",
      oldPrice: 349,
      newPrice: 299,
    },
    {
      id: 2,
      title: "Family Pack",
      items: "Vegetables + Fruits",
      oldPrice: 899,
      newPrice: 799,
    },
    {
      id: 3,
      title: "Salad Pack",
      items: "Lettuce, Cucumber, Tomato",
      oldPrice: 274,
      newPrice: 199,
    },
  ];

  return (
    <section id="deals" className="py-16 bg-white">
      <div className="text-center mb-10">
        <p className=" text-orange-600 font-semibold">Best Deals of the Season!</p>
        <h1 className="text-4xl font-bold text-gray-800">Special Offers</h1>
        <p className="text-gray-500 mt-2">Check out our amazing deals!</p>
      </div>
      {/* Free Delivery Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-orange-500 text-white rounded-3xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-2">🚚 Free Delivery</h2>
          <p className="text-lg">On Orders Above NPR 999</p>
          <p className="mt-2 text-orange-100">Fresh vegetables delivered right to your doorstep.</p>
        </div>
      </div>

      {/* Combo Deals */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">🔥 Combo Deals</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-4">
                Save NPR {deal.oldPrice - deal.newPrice}
              </span>

              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>

              <p className="text-gray-500 mb-4">{deal.items}</p>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-gray-400 line-through">NPR {deal.oldPrice}</span>

                <span className="text-orange-500 font-bold text-xl">NPR {deal.newPrice}</span>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                Add Combo to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
