import { Items } from "../Cart/Items";
import { Summary } from "./Summary";
import { useCart } from '../../Context/CartContext';

export const CartContainer = () => {
    const { cartItems, removeFromCart, addToCart, removeQuantity } = useCart(); // Add parentheses to call the hook

    const handleAdd = (productId) => {
        addToCart(productId);
    }

    const handleRemove = (productId) => {
        removeFromCart(productId);
    }

    const handleRemoveQuantity = (productId) => {
        removeQuantity(productId);
    }

    return (
        <>
            <div className="md:flex bg-sky-100 h-full">
                <div className="bg-gray-100 md:m-10 m-2 p-2 md:p-4 shadow-lg md:w-3/4 w-full rounded-lg">
                    <h1 className="md:mb-4 mb-2 text-lg md:text-xl font-bold text-center">Shopping Cart</h1>
                    {
                        cartItems && cartItems.length > 0 ? cartItems.map((item) => (
                            <div key={item.id}> {/* Set the key here */}
                                <Items
                                    handleRemove={handleRemove}
                                    handleAdd={handleAdd}
                                    handleRemoveQuantity={handleRemoveQuantity}  // Fixed typo in prop name
                                    item={item} /> {/* Pass item prop to Items */}
                            </div>
                        )) :
                            <div>
                                <p className="text-xl md:text-3xl font-bold text-pink-500 text-center mt-16">
                                    Zero Item In Cart
                                </p>
                            </div>
                    }
                </div>

                <div className="bg-slate-400 md:m-10 m-2 md:w-96 w-full md:max-h-72 p-2 shadow-lg rounded-lg md:ml-20 md:mt-10 ml-1">
                    <h1 className="md:mb-4 mb-2 text-lg md:text-xl font-bold text-center">Summary</h1>
                    <Summary cartItems={cartItems || []} />
                </div>
            </div>
        </>
    );
};
