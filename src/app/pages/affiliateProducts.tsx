import React from "react";

// You can move this data to a separate file or fetch dynamically later
const products = [
  {
    id: 1,
    title: "LuvLap 4 in 1 Convertible Baby High Chair with footrest",
    description: " Convertible to High Chair, Low Chair, & Booster Seat, Essential for Baby Feeding (Green) ",
    image: "https://m.media-amazon.com/images/I/51kJZGKj3rL._SX679_.jpg",
    link: "https://www.amazon.in/gp/aw/d/B079S9JX3S/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=7ec920abbbb9be6873bb579f029d8f24&hsa_cr_id=0&qid=1768846964&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=El4eim5T5W&ref_=sbx_s_sparkle_sbtcd_asin_0_title&pd_rd_w=01CPg&content-id=amzn1.sym.6dfd6df7-44a2-4792-8c83-3ac8a4ba533a%3Aamzn1.sym.6dfd6df7-44a2-4792-8c83-3ac8a4ba533a&pf_rd_p=6dfd6df7-44a2-4792-8c83-3ac8a4ba533a&pf_rd_r=PHREXRFRH0JH7WVW3JMP&pd_rd_wg=7qXvs&pd_rd_r=6748617c-c55c-4c99-9f0f-1dbd7ce49b4c&th=1",
  },
//   {
//     id: 2    ,
//     title: "Amazon Affiliate Product",
//     description: "High-quality product available on Amazon. Click below to view details and purchase.",
//     image: "https://m.media-amazon.com/images/I/61Y30DpqRVL._SL1500_.jpg", // placeholder image
//     link: "https://www.amazon.in/gp/aw/d/B079S9JX3S/?tag=YOUR_AFFILIATE_TAG",
//   },
];

export default function AffiliateProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recommended Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 transition"
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
