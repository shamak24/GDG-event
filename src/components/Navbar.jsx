import { Search, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <NavLink to="/">
            <p className="text-xl font-bold">
              GdgMovie
            </p>
          </NavLink>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Categories
            </a>
            <a href="#" className="hover:text-gray-300">
              Top Rated
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="search"
              placeholder="Search movies..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <NavLink to="/cart">
            <button className="relative bg-transparent hover:text-gray-300 p-2">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-sm px-2">
                  {cartCount}
                </span>
              )}
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}