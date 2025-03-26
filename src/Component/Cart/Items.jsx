import { CgCloseR } from "react-icons/cg";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";

export const Items = ({ item, handleRemove, handleAdd, handleRemoveQuantity }) => {
    return (
        <div className="border rounded-lg border-dark md:p-4 p-2 mb-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg" // Adjust size and ensure image is correctly covered
                />

                <div className="flex flex-col md:flex-row md:items-center w-full justify-between gap-3 md:gap-8 p-2">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full">
                        <h5 className="text-sm md:text-base font-medium">{item.title}</h5>
                        <p className="text-sm md:text-base text-gray-700">{item.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => handleRemoveQuantity(item.id)} 
                            className="text-xl text-gray-700 hover:text-gray-900"
                        >
                            <CiCircleMinus />
                        </button>
                        <span className="text-base">{item.quantity}</span>
                        <button 
                            onClick={() => handleAdd(item)} 
                            className="text-xl text-gray-700 hover:text-gray-900"
                        >
                            <IoAddCircleOutline />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <p className="text-sm md:text-base text-gray-700">{item.price}</p>
                        <button 
                            onClick={() => handleRemove(item.id)} 
                            className="text-lg text-gray-700 hover:text-gray-900"
                        >
                            <CgCloseR />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
