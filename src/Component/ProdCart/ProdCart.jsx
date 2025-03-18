import { CiCirclePlus } from "react-icons/ci";
import { useCart } from "../../Context/CartContext";

export const ProdCart = ({ product }) => {
    const {addToCart} = useCart()
    const HandleAdd = (product) => {

        addToCart(product)
    }
    

    return ( <>
      
                {/* Product Section (Left side) */}
            <div  className=" border  shdow-lg rounded-lg">  

            <div className="rounded  ">
                    <img className=" mt-2  h-36  rounded-lg"
                        src={product.image} />

                    <div className=" bg-gray-100 rounded  ">
                        <h3 className="text-lg font-semibold w-40 overflow-hidden mt-2">
                            {product.title }
                        </h3>
                        <p className="text-gray-600">MEN'S CLOTHING</p>



                        <div className="flex justify-between items-center mt-2 gap-1">

                            <p className="text-xl font-bold mb-2 mr-2">$22</p>
                            <button  onClick={()=>HandleAdd(product)} className="mb-2 mr-2 bg-blue-400 text-white font-bold py-2 px-2 rounded-full">
                                <CiCirclePlus  className="text-white  " />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}