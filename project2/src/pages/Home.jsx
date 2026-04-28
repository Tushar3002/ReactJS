import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { deleteProduct, getProducts, getWish } from "../api/api";
import { useDispatch } from "react-redux";
import { setWishlist } from "../features/cart/wishlistSlice";


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

const dispatch=useDispatch()

  useEffect(()=>{
    const wish=async()=>{
      try {
        const res=await getWish()
      dispatch(setWishlist(res.data.wishlist))
      } catch (error) {
        console.log(error);
        
      }
    }
    wish()
  },[])

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