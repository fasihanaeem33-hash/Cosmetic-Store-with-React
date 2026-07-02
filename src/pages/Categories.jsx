import { useState } from "react";
import products from "../data/products";

const Categories = () => {
  const [selected, setSelected] = useState("");

  const categories = [
    "Makeup",
    "Skincare",
    "Face",
    "Eyes",
    "Fragrance",
  ];

  const filteredProducts = selected
    ? products.filter(
        (p) => p.category === selected
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">

      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Shop by Categories
      </h1>

      {/* CATEGORY BOXES */}
      <div className="grid md:grid-cols-5 gap-6 mb-12">

        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => setSelected(cat)}
            className="cursor-pointer bg-pink-50 hover:bg-pink-100 transition p-6 rounded-xl shadow text-center"
          >
            <h2 className="font-bold text-pink-600 text-lg">
              {cat}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Explore {cat} products
            </p>
          </div>
        ))}

      </div>

      {/* SELECTED PRODUCTS */}
      {selected && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            {selected} Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md p-4 rounded-xl"
              >
                <img
                  src={product.image}
                  className="w-full h-56 object-cover rounded-lg"
                />

                <h3 className="font-bold mt-3">
                  {product.name}
                </h3>

                <p className="text-pink-600">
                  {product.price}
                </p>
              </div>
            ))}

          </div>
        </>
      )}

    </div>
  );
};

export default Categories;