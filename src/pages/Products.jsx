import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">

      <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">
        Our Products
      </h1>

      {/* Search */}

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search cosmetics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
        />
      </div>

      {/* Products */}

      <div className="grid md:grid-cols-3 gap-8">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2 className="text-center text-xl col-span-3">
            No Product Found
          </h2>
        )}

      </div>

    </div>
  );
};

export default Products;