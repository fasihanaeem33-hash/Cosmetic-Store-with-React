import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
      <img
        src={product.image}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-pink-600 font-semibold">{product.price}</p>
      <p className="text-gray-500">{product.category}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
