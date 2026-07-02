import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-bold text-pink-600">
          Glow Beauty
        </h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-pink-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-pink-600">
              Products
            </Link>
          </li>

          <li>
            <Link to="/categories" className="hover:text-pink-600">
              Categories
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-pink-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-pink-600">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/cart" className="hover:text-pink-600">
             Cart 🛒
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;