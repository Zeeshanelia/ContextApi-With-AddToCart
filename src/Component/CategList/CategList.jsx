import { useGetCategories } from "../../Hooks/useGetCategories";
import { CategCart } from "../CategCart/CategCart";

export const CategList = () => {

    const { Category, loading } = useGetCategories
    console.log ( Category , loading)
    return (
        <>
            <div className=" space-y-4 md:left-42  w-56 p-1">  

            <CategCart />
               
            </div>


        </>
    )
}