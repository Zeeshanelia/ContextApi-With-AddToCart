import { useGetCategories } from "../../Hooks/useGetCategories";
import { CategCart } from "../CategCart/CategCart";

export const CategList = () => {
    const { Category, loading, error } = useGetCategories();  // Destructure error state

    if (error) {
        return <div className="text-red-500">{error}</div>;  // Show error if fetch fails
    }

    return (
        <div className="space-y-4 md:left-42 w-56 p-1">
            {loading ? (
                // Placeholder loading content
                Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="bg-gray-200 p-4 rounded-md">
                        <h1>Loading...</h1>
                    </div>
                ))
            ) : (
                Category.length === 0 ? (
                    <div>No categories available.</div>  // Handle empty category list
                ) : (
                    Category.map((category) => (
                        <CategCart key={category} category={category} />
                    ))
                )
            )}
        </div>
    );
};
