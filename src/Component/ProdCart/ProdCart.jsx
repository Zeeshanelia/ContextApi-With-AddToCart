import { CiCirclePlus } from "react-icons/ci";
import { useCart } from "../../Context/CartContext";

export const ProdCart = ({ product }) => {
    const { addToCart } = useCart();
    const HandleAdd = (product) => {
        addToCart(product);
    };

    const shortTitle = product.title.split(/\s+/).slice(0, 5).join(' ');

    return (
        <div className="border mt-5 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200 w-full sm:w-48 lg:w-40">
            <div className="p-2">
                <div className="flex flex-col items-center ">
                    {/* Image Section */}
                    <img
                        className="w-full h-40  sm:h-48 object-contain rounded-lg"
                        src={product.image}
                        alt={product.title}
                    />
                    <div className="mt-2 w-full text-center space-y-2">
                        {/* Title */}
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold line-clamp-2">
                            {shortTitle}
                        </h3>
                        {/* Category */}
                        <p className="text-gray-500 text-xs sm:text-sm">MEN'S CLOTHING</p>

                        <div className="flex flex-col sm:flex-row justify-between items-center pt-2">
                            {/* Price */}
                            <p className="text-lg sm:text-xl font-bold">${product.price}</p>
                            {/* Add to Cart Button */}
                            <button
                                onClick={() => HandleAdd(product)}
                                className="p-2 mt-2 sm:mt-0 bg-blue-400 hover:bg-blue-500 transition-colors rounded-full"
                            >
                                <CiCirclePlus className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
