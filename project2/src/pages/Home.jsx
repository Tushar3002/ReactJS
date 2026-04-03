import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import { api } from "../api/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await api.get("/products?&skip=30");
      setProducts(res.data.products);
      console.log(res.data.products);
      
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-4">
      <h1 className="text-xl font-bold">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;