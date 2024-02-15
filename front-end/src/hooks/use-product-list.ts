import { useState, useEffect } from "react";

export const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError((error as { message: string }).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};
