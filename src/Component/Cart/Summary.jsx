

export const Summary = () => {


    return (<>
    
    <div className=" text-center md:w-full text-white ">


        <div className="flex  justify-evenly gap-3">
            <h3> SubTotal:</h3>
            <h3 className="ml-14">$780</h3>
        </div>

        <div className="flex  justify-evenly gap-3">
            <h3> Tex(2%) : </h3>
            <h3 className="ml-16">   $20  </h3>
        </div>

        <div className="flex  justify-evenly gap-3">
            <h3> Total Items : </h3>
            <h3 className="ml-12">   $20  </h3>
        </div>



        <div className="flex  justify-evenly gap-3">
            <p> Total Price : </p>
            <p className="ml-10"> $2500 </p>
        </div>

            <button className="md:mt-16 mt-5 mb-2 p-2 md:mr-6 bg-blue-500 rounded-lg md:w-full w-22"> Process To Checko-out </button>

    </div>
    
    </>)}