import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { deleteProduct, getProducts } from "../api/api";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);

      console.log(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts();
}, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-4">
      <h1 className="text-xl font-bold">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item}  />
        ))}
      </div>
    </div>
  );
};

export default Home;