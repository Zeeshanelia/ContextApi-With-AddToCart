# Context Api With Add To Cart 
React Shopping App ｜ React Modern ecommerce ｜ React Shopping Cart with Context Api ｜ Shopping App
An eCommerce React app built with ContextAPI provides a centralized state management solution for handling user interactions and cart functionality. The app allows users to add products to their cart by clicking the "Add to Cart" button, which triggers an action in the Context API to update the cart state. Users can also remove items from the cart with a delete button, which adjusts the cart state accordingly. Context API ensures that the cart data is accessible across all components without the need for prop drilling. Additionally, the app features dynamic updates to the cart icon, reflecting the number of items added. The context helps keep the shopping experience seamless and efficient, even when the cart state changes. This approach improves scalability and organization within the React app for managing global state.






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


  fix this issue
  
     NOT_FOUND  
     Code: NOT_FOUND
     ID: bom1::rpz9b-1742989393993-8d85a1c21cef
  



 1. Create a vercel.json file at your project root with:

  
{                                 json 
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}




Option B: Add a _redirects File
In your public folder, create a _redirects file with:

           /* /index.html 200

2. Verify Build Settings in Vercel
Ensure your Vercel project settings are correct:

Build Command: npm run build (or yarn build)

Output Directory: build (default for Create React App) or your framework's output folder.


3. Check homepage in package.json
If using React Router, add this to your package.json to prevent path mismatches:



        {                          json
         "homepage": "./"
        }

4. Test Locally
Test the production build locally to catch issues early:

npm run build
serve -s build
Visit http://localhost:5173/ and test navigation.

