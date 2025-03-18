import { useEffect, useState } from "react";

export const useGetCategories = () => {
  const [Category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);  // Set loading to true initially

  const getCategories = async () => {
    try {
      const req = await fetch('https://fakestoreapi.com/products/categories');
      if (req.ok) {
        let data = await req.json();
        setCategory(data);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);  // Set loading to false after fetch attempt, regardless of success or failure
    }
  };

  useEffect(() => {
    getCategories();
  }, []); // Empty array to call effect only on mount

  return { Category, loading };
};
