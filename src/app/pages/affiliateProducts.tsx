import React from "react";

// You can move this data to a separate file or fetch dynamically later
const products = [
  {
    id: 1,
    title: "LuvLap 4 in 1 Convertible Baby High Chair with footrest",
    description: " Convertible to High Chair, Low Chair, & Booster Seat, Essential for Baby Feeding (Green) ",
    image: "../../assets/products/The White Willow.jpg",
    link: "https://amzn.to/3LFpeoo",
  },
  {
    id: 2,
    title: "Philips Avent Natural Response Baby Feeding Bottle",
    description: "125Ml Baby Milk Bottle for Newborns and Up, Bpa Free, 0+ Months (Model Scy900/01) ",
    image: "https://m.media-amazon.com/images/I/616A6zD72SL._SX679_.jpg", 
    link: "https://amzn.to/4qz8uyg",
  },
  {
    id: 3,
    title: "haus & kinder 100% Cotton Muslin Swaddle Wrap for New Born Baby",
    description: "Pack of 5 (100×100 cm) | Baby Blanket & Swaddles for Newborn | Animal Print  ",
    image: "https://m.media-amazon.com/images/I/71PoD0GSiKL._SX679_.jpg", 
    link: "https://amzn.to/4qAYK6C",
  },
  {
    id: 4,
    title: "The White Willow Premium Baby Mattress For 0 Years & Above",
    description: "1 Year Warranty-Baby Mattress For New Born-100% Pure Dual Memory Foam Crib Mattress- Baby Cot Mattress-Bassinet-Soft Fabric-48\"L x 24\"W x 4\"H ",
    image: "https://m.media-amazon.com/images/I/81p-3q+yOiL._SX522_.jpg", 
    link: "https://amzn.to/49xMKgb",
  },
];

export default function AffiliateProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recommended Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.title}
              </h3>

              <p className="text-sm text-gray-600 flex-grow">
                {product.description}
              </p>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary hover:bg-yellow-600 text-white font-medium py-2 px-4 transition"
              >
                Buy on Amazon
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
