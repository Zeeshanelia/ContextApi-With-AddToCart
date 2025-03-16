import { CgCloseR } from "react-icons/cg";

export const Items = () => {


    return (
        <>
           
           


           <div className=" border  rounded-lg  border-dark md:p-2  md:m-2 ">
                <div className="">
                    <div className="flex ">
                        <img src="https://images.pexels.com/photos/39624/padlock-lock-chain-key-39624.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dasa" className="w-24 mr-2" />

                        <div className="flex fl  md:gap-14 gap-7  justify-evenly items-center">
                            <h5 className="">Title</h5>
                            <p className=""> $100 </p>
                            <p className="">- 5 +</p>
                            <p className=""> $100 </p>
                            <p className="">
                            <CgCloseR className="font-bold md:text-xl md:mt-1"/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          


        </>
    )
}