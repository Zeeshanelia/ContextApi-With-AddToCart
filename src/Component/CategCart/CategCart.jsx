import { Link } from "react-router-dom";

export const CategCart = ({ category }) => {
    return (
        <Link to={`/category/${category}`}>
            <div className="space-y-4   p-2 md:left-48 text-center">
                <div className="text-center text-lg md:text-xl border rounded-[1rem] py-3 px-4 text-gray-600 hover:bg-gray-100 transition-all duration-300">
                    {category}
                </div>
            </div>
        </Link>
    );
};





{/* <div className="text-gray-400 text-center text-lg border rounded-[1rem] py-3   ">
                    Jewelry
                </div>

                <div className="text-center text-gray-400 border text-lg rounded-[1rem] py-3   ">
                    Shop
                </div>

                <div className="text-center text-lg border text-gray-400 rounded-[1rem] py-3   ">
                    Cloth
                </div> */}