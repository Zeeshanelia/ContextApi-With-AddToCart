import { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loder, setLoder] = useState(false)
    const { category } = useParams()

    const getProduct = async (category) => {
        try {
            setLoder(true)
            let url = "https://fakestoreapi.com/products"

            if (category) {
                url += `/category/${category}?limit=4`
            }
            else {
                url += '?limit=4'
            }

            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                setProducts(data)
                setLoder(false)
            }
        }
        catch (error) {
            console.error(error)
            setLoder(false)
        }
        finally {
            setLoder(false)
        }
    }

    useEffect(() => {
        getProduct(category)
    }, [category])

    return (
        <ProductContext.Provider value={{ products, loder }}>
            {children}
        </ProductContext.Provider>
    )
}

// Custom hook to use the ProductContext
export const useProduct = () => {
    const context = useContext(ProductContext)
    if (!context)
         {
        throw new Error("useProduct must be used within a ProductProvider")
    }
    return context
}
