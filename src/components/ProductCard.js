import { useContext } from "react";
import { cartContext } from "../App";

export default function ProductCard({ id, name, image, price }) {
  const { dispatch } = useContext(cartContext);

  return (
    <div className="w-64 h-96 bg-white rounded-xl p-5 flex flex-col justify-between shadow-lg">
      <img src={image} alt={`product ${id}`} />
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex justify-between -center">
          <p className="text-gray-700">${price}</p>
          <button
            onClick={() => dispatch({ type: "ADD", id: id })}
            className="px-3 py-2 bg-red-500 text-white rounded-md"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
