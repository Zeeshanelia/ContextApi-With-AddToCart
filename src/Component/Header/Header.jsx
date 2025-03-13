import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

export const Header = () => {
    return (
        <>
            <div className="flex  space-x-9 justify-between md:w-[72rem] p-6">










                <div>
                    <h2 className="text-2xl font-bold mb-6">Spoilr</h2>
                </div>

                <div className="flex gap-3">
                    <div className="relative flex md:gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded p-3 md:w-44  h-8" />
                        <FaSearch className="absolute md:left-36 left-44 top-2 text-gray-500" />
                    </div>
                    <h2 className="text-2xl font-bold mt-1">
                        <FiShoppingCart />
                    </h2>
                </div>
            </div>



            <div className="flex  w-[1192px]    ">

                {/* Product Cards */}
                <div className="flex gap-2 space-y-4">
                    {/** Repeat this block for each product */}
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="bg-white-950 rounded border p-4">
                            <img
                                src="img/sho.png"
                                alt="Product"
                                className=" h-[10rem] rounded"/>


                            <div className=" bg-gray-200 rounded-lg p-2 w-44">

                                <h3 className="text-lg font-semibold mt-2">Men's Casual Premium</h3>
                                <p className="text-gray-600">MEN'S CLOTHING</p>

                                <div className="flex justify-between items-center mt-4 gap-2">

                                <p className="text-xl font-bold ">$22</p>
                                    <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-2 rounded-full">
                                        <CiCirclePlus className="text-white" />
                                    </button>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>





                {/* Additional Section (Right side) */}
                <div className=" rounded-lg  flex   relative">


                    <div className="absolute left-24 mt-4 w-56 space-y-4">

                        <span className="font-extrabold">
                        <h1 className="text-center text-lg  ">Categories 
                        </h1>
                        </span>

                        <div className="text-center text-lg border rounded-[1rem]  py-3 text-gray-400">
                            Elecrtonics
                        </div>
                        <div className="text-gray-400 text-center text-lg border rounded-[1rem] py-3   ">
                            Jewelry
                        </div>

                        <div className="text-center text-gray-400 border text-lg rounded-[1rem] py-3   ">
                            Shop
                        </div>

                        <div className="text-center text-lg border text-gray-400 rounded-[1rem] py-3   ">
                            Cloth
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
