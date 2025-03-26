# Context Api With Add To Cart 

React Shopping App ｜ React Modern ecommerce ｜ React Shopping Cart with Context Api ｜ Shopping App


   Logic : Repeat this block for each product


        
           
          {[...Array(4)].map((_, index) => (
         <div key={index} className="bg-white-950 rounded border p-4">
         <img src="img/sho.png"  alt="Product" className=" h-[10rem] rounded"/>

                 <div className=" bg-gray-200 rounded-lg p-2 w-44">
                    <h3 className="text-lg font-semibold mt-2">Men's Casual Premium</h3>
                    <p className="text-gray-600">MEN'S CLOTHING</p>

                    <div className="flex justify-between items-center mt-4 gap-2">

                    <p className="text-xl font-bold "> $22 </p>
                    <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-2 rounded-full">                            
                    <CiCirclePlus className="text-white" />
                    </button>
              </div>
         </div>



or simple logic


      { loading ? (
        Array.from({ length: 4 }).map(( _ , index) => (
          <div key={index}> {/* Add key for each skeleton loader */}
            <Skeleton />
          </div>))
        ) : ( products.map((product) => (
          <ProdCart key={product.id} product={product} />))
        )
      }


    

  main css is geting from 2 component  ProList and ProdCart
  