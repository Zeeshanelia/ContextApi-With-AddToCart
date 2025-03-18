import React from 'react';
import { ProdCart } from "../ProdCart/ProdCart";
import { useProduct } from '../../Context/ProductContext';
import { Skeleton } from '../Skeleton/Skeleton';

export const ProdList = () => {
  const { products, loading } = useProduct();
  // const loading = true; // You should set this dynamically based on loading state

  return (<>




    <h1 className=" text-center text-2xl text-slate-500 font-medium">Products Section</h1>
    <div className=" items-center justify-center md:flex gap-2 md:w-[55rem] w-3/4 ">

      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <div key={index}> {/* Add key for each skeleton loader */}
            <Skeleton />
          </div>
        ))
      ) : (
        products.map((product) => (
          <ProdCart key={product.id} product={product} />
        ))
      )}


    </div>
  </>);
};
