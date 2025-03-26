import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../Context/CartContext";

export const Header = () => {
    const { cartItems } = useCart();

    return (
        <div className="flex justify-between items-center mx-auto md:w-[70rem] w-full p-4">
            {/* Logo */}
            <Link to="/">
                <h2 className="text-xl md:text-2xl font-bold">E-Shop</h2>
            </Link>

            {/* Search and Cart Section */}
            <div className="flex gap-4 items-center">
                {/* Search Bar */}
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded-full p-2 md:w-44 w-32 h-8 focus:outline-none"
                    />
                    <FaSearch className="absolute right-2 top-2 text-gray-500" />
                </div>

                {/* Cart Icon */}
                <Link to="/cart">
                    <div className="relative flex items-center">
                        <FiShoppingCart className="text-2xl font-bold" />
                        <sup className="absolute -top-2 -right-2 bg-red-400 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                            {cartItems.length}
                        </sup>
                    </div>
                </Link>
            </div>
        </div>
    );
};
