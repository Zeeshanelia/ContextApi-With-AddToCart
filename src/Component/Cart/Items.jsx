import { CgCloseR } from "react-icons/cg";
import { useCart } from "../../Context/CartContext";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";


export const Items = ({ item, handleRemove , handleAdd , handleRemoveQauntity}) => {



    return (
        <>
            <div className="border rounded-lg border-dark md:p-2 md:m-2">
                <div className="">
                    <div className="flex ">
                        <img
                            src={item.image}
                            alt=""
                            className="w-12 mr-2 rounded-lg"
                        />

                        <div className="flex md:gap-24 p-2 gap-7  justify-between items-center">
                            <h5 className="">{item.title}</h5>
                            <p className=""> {item.price} </p>


                            <span className="flex items-center"> 
                    <CiCircleMinus  onClick={()=>handleRemoveQauntity(item.id)}/> {item.quantity} <IoAddCircleOutline  onClick={()=>handleAdd(item)}/>  </span>



                            <p className=""> {item.price} </p> 
                           
                            <p onClick={() => handleRemove(item.id)}>
                                 {/* Call handleRemove with item.id */}
                                <CgCloseR className="font-bold md:text-xl md:mt-1"/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
