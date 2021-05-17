import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="px-8 sm:px-14 md:px-24 lg:px-36 bg-gray-300 bg h-screen bg-hero-pattern bg-cover flex flex-col justify-center items-center gap-10">
      <div className="overlay"></div>
      <p className="z-10 text-white text-4xl text-center">
        Unstoppable style you can wear all day long!
      </p>
      <div className="animate-bounce text-white text-2xl px-3 py-2 bg-red-600 rounded-xl">
        <Link to="/products">Buy Now</Link>
      </div>
    </div>
  );
}
