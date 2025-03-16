import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
export const Header = () => {
    return (
        <>

            <div className="flex justify-between mx-auto md:w-[70rem] w-full p-6">

                <Link to='/'>
                    <div>
                        <h2 className="flex md:text-2xl font-bold md:ml-4 ">E-Shop</h2>
                    </div>
                </Link>



                <div className="flex gap-2  ">
                    <div className="relative flex md:gap-2 gap-1 ">
                        <input
                            type="text"
                            placeholder="  Search  "
                            className="border rounded p-3 md:w-44 w-30 h-8" />
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
