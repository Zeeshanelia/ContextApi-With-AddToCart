import { CiCirclePlus } from "react-icons/ci";


 export const ProdCart = () => {

    return(
        <>
            {/* Product Section (Left side) */}
            <div className="ml-4 mt-4 ">
                <h1 className="ml-2 text-2xl text-slate-500 font-bold">Products Section</h1>

                {/** Product Card */}
            <div className="md:grid-cols-4 w-[55rem] space-x6 gap-3 grid grid-cols-2 p-2 items-center justify-center shdow-lg rounded-lg">
                    {/** Repeat this block for each product */}
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="bg-white-950 rounded border ">
                            <img
                                src="img/sho.png"
                                className="ml-4 mt-2  h-[10rem] rounded" />


                            <div className=" bg-gray-100 rounded  ">

                                <h3 className="text-lg font-semibold mt-2">Men's Casual Premium</h3>
                                <p className="text-gray-600">MEN'S CLOTHING</p>

                                <div className="flex justify-between items-center mt-5 gap-1">

                                    <p className="text-xl font-bold mb-2 mr-2">$22</p>

                                    <button className="mb-2 mr-2 bg-blue-400 text-white font-bold py-2 px-2 rounded-full">
                                        <CiCirclePlus className="text-white  " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
        </>
    )
}