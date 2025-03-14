import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
export const Header = () => {
    return (
        <>
        
            <div className="flex  justify-between md:w-[75rem] w-full p-6">

                   <Link to='/'> 
                <div>
                        <h2 className="text-2xl font-bold mb-6">Spoilr</h2>
                </div>
                   </Link> 
                    

                <div className="flex gap-3">
                    <div className="relative flex md:gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded p-3 md:w-44  h-8" />
                        <FaSearch className="absolute md:left-36 left-44 top-2 text-gray-500" />
                    </div>
                    <Link to='/cart'>
                        <h2 className="text-2xl font-bold mt-1">
                            <FiShoppingCart />
                        </h2>
                    </Link>
                </div>
            </div>
        </>
    );
};
