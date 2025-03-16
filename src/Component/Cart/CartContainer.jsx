import { Items } from "../Cart/Items";
import { Summary } from "./Summary";
export const CartContainer = () => {


    return (
        <>
            <div className="md:flex bg-sky-100 h-full ">

                <div className="bg-gray-100 md:m-10 md:p-4 p-1 m-1  shadow-lg 
                     md:w-3/4 w-full rounded-lg">
                    <h1 className="md:mb-4 mb-1 md:text-xl font-bold flex items-center justify-center">Shoping Cart</h1>
                    <Items />
                    <Items />
                    <Items />
                 
                </div>


                <div className="bg-slate-400 md:m-10 w-96 md:max-h-72 md:p-2 shadow-lg rounded-lg md:ml-20 md:mt-10 ml-1 ">
                <h1 className="md:mb-4 mb-1 md:text-xl font-bold flex items-center justify-center">Summary's</h1>
                    <Summary />
                </div>
            </div>



        </>
    )
}