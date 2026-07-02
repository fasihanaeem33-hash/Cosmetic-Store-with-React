import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-8 py-10">

      <h1 className="text-4xl font-bold text-center mb-10 text-pink-600">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          <div className="grid gap-6">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-pink-600">{item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={clearCart}
            className="mt-6 bg-gray-800 text-white px-6 py-3 rounded"
          >
            Clear Cart
          </button>
        </>
      )}

    </div>
  );
};

export default Cart;