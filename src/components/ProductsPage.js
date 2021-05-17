import ProductCard from "./ProductCard";

export default function ProductsPage({ products }) {
  return (
    <div className="pt-28 pb-16 px-8 sm:px-14 md:px-24 lg:px-36 min-h-screen flex justify-center flex-wrap gap-10">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
