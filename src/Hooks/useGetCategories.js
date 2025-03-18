import { useEffect, useState } from "react";

export const useGetCategories = () => {
  const [Category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);  // Set loading to true initially
  const [error, setError] = useState(null);  // Added error state

  const getCategories = async () => {
    try {
      const req = await fetch('https://fakestoreapi.com/products/categories');
      if (req.ok) {
        let data = await req.json();
        setCategory(data);
      } else {
        setError("Failed to fetch categories. Please try again.");
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      setError("An error occurred while fetching categories.");
      console.error(error);
    } finally {
      setLoading(false);  // Set loading to false after fetch attempt, regardless of success or failure
    }
  };

  useEffect(() => {
    let isMounted = true;  // Flag to check if component is still mounted
    if (isMounted) {
      getCategories();
    }
    return () => {
      isMounted = false;  // Cleanup on unmount to prevent updating state after unmount
    };
  }, []); // Empty array to call effect only on mount

  return { Category, loading, error };  // Return error state too
};
