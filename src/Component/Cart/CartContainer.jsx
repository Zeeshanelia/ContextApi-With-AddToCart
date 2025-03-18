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

    const handleRemoveQauntity = (productId) => {
        removeFromCart(productId);
    }

    return (
        <>
            <div className="md:flex bg-sky-100 h-full ">
                <div className="bg-gray-100 md:m-10 md:p-4 p-1 m-1 shadow-lg 
                     md:w-3/4 w-full rounded-lg">
                    <h1 className="md:mb-4 mb-1 md:text-xl font-bold flex items-center justify-center">Shopping Cart</h1>
                    {
                        cartItems && cartItems.length > 0 ? cartItems.map((item) => (
                            <div key={item.id}> {/* Set the key here */}
                                <Items
                                    handleRemove={handleRemove}
                                    handleAdd={handleAdd}
                                    handleRemoveQauntity={handleRemoveQauntity}
                                    item={item} /> {/* Pass item prop to Items */}
                            </div>
                        )) :
                            <div>
                                <p className="text-3xl  font-bold text-pink-500 text-center mt-16">
                                    Zero Item In Cart
                                </p>
                            </div>
                    }
                </div>

                <div className="bg-slate-400 md:m-10 w-96 md:max-h-72 md:p-2 shadow-lg rounded-lg md:ml-20 md:mt-10 ml-1 ">
                    <h1 className="md:mb-4 mb-1 md:text-xl font-bold flex items-center justify-center">Summary</h1>
                    <Summary />
                </div>
            </div>
        </>
    );
};
