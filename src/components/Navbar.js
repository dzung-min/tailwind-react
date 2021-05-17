import { Link } from "react-router-dom";
import { useContext } from "react";

import { cartContext } from "../App";

const Navbar = () => {
  const cart = useContext(cartContext);
  const numberOfCartItems = cart.cartItems.length;

  return (
    <nav className="z-10 fixed w-full flex justify-between items-center shadow-sm h-16 px-8 sm:px-14 md:px-24 lg:px-36 bg-red-700 text-white">
      <Link to="/" className="uppercase font-bold text-2xl">
        Shooes
      </Link>
      <Link
        className="flex items-center gap-x-2 bg-white text-black py-1 px-3 rounded-lg"
        to="/cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <span>{numberOfCartItems}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
