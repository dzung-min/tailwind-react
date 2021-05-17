import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center shadow-sm h-14 px-8 sm:px-14 bg-red-700 text-white">
      <Link to="/" className="uppercase font-bold text-2xl">
        Shooes
      </Link>

      <ul className="hidden sm:flex items-center">
        <Link className="ml-5" to="/products">
          Products
        </Link>
        <Link className="ml-5" to="/about">
          About
        </Link>
        <Link className="ml-5" to="/contact">
          Contact
        </Link>
      </ul>
      <Link
        className="ml-5 flex items-center gap-x-2 bg-white text-black py-1 px-3 rounded-lg"
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
        <span>2</span>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 sm:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </nav>
  );
};

export default Navbar;
