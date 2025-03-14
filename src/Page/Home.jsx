import { ProdList } from "../Component/ProdList/ProdList";
import { CategList } from "../Component/CategList/CategList";



export const Home = () => {

    return (<>

        <div className="flex flex-row justify-center items-center space-x-4">
            <div className="w-3/4  ">
            
                < ProdList />
            </div>


            <div className="w-1/4  ">
            
                <CategList />
            </div>
        </div>
    </>
    )
}