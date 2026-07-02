import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10">

          <div>
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Discover Your <span className="text-pink-600">Natural Beauty</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Shop premium skincare, makeup and beauty essentials at affordable prices.
            </p>

            <Link to="/products">
              <button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition">
                Shop Now
              </button>
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900"
              alt="Beauty"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Featured Products */}

      <section className="max-w-7xl mx-auto px-8 py-14">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {products.slice(0,3).map((product)=>(
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;