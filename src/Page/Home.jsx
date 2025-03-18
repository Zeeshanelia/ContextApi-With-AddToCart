import { ProdList } from "../Component/ProdList/ProdList";
import { CategList } from "../Component/CategList/CategList";
import { ProductProvider } from '../Context/ProductContext'


export const Home = () => {

     return (<>
        <ProductProvider>
            <div className="flex flex-row justify-center items-center space-x-4">
                <div className="w-3/4  ">

                    < ProdList />
                </div>


                <div className="w-1/4  ">

                    <h1 className="text-center mr-[6rem] text-2xl text-slate-500 font-bold">Categories
                    </h1>
                    <CategList />
                   
                </div>
            </div>
        </ProductProvider>
    </>
    )
}