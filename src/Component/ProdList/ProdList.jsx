import React from 'react';
import { ProdCart } from "../ProdCart/ProdCart";
import { useProduct } from '../../Context/ProductContext';
import { Skeleton } from '../Skeleton/Skeleton';

export const ProdList = () => {
  const { products, loading } = useProduct();

  return (
    <>
      <h1 className="text-center text-2xl text-slate-500 font-medium mt-10">Products Section</h1>

      {/* Product List Container */}
      <div className="grid grid-cols-4 gap-4 justify-center  md:w-[45rem] w-3/4 mx-auto">

        {/* Display Skeletons while loading */}
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
              <Skeleton />
            </div>
          ))
        ) : (
          // Display products when loading is done
          products.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 lg:w-1/4 ">
              <ProdCart product={product} />
            </div>
          ))
        )}

      </div>
    </>
  );
};
