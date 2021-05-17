import { useContext } from "react";
import { cartContext } from "../App";

export default function CartPage() {
  const { cartItems } = useContext(cartContext);

  return (
    <div className="lg:flex pt-28 pb-16 px-8 sm:px-14 md:px-24 lg:px-36 gap-10">
      <div className="flex flex-col gap-10 w-full lg:w-3/4">
        {cartItems.map((item) => (
          <div className="flex justify-between border-b pb-5">
            <div className="flex items-center gap-3">
              <img className="w-24" src={item.image} alt="" />
              <div>{item.name}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span>-</span>
                <input className="w-6 text-center" type="text" value="1" />
                <span>+</span>
              </div>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-1/4">
        <h2>Summary</h2>
        <div className="flex justify-between">
          <p>Items</p>
          <p>{cartItems.length}</p>
        </div>
        <div>
          <h3>Shipping</h3>
          <input className="border border-gray-800 w-full" type="text" />
        </div>
        <div className="flex justify-between">
          <h3>Total Amount</h3>
          <p>$123</p>
        </div>
        <button className="px-3 py-2 rounded-xl bg-red-500 text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}
