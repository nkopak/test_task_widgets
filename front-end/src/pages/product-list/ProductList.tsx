import { useProductList } from "../../hooks/use-product-list";
import { IProduct } from "../../interfaces/product";
import { Product } from "../../widjets/Product";

export const ProductList = () => {
  const { products, loading, error } = useProductList();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div className="mx-20 mt-10">
      <div className="flex flex-col items-center justify-center">
        <span className="uppercase font-bold ">
          the innovation leader in luxury vinyl plank
        </span>
        <h1 className="font-serif text-6xl font-thin my-4">
          Let's Get Started
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product: IProduct) => (
          <Product productInfo={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
