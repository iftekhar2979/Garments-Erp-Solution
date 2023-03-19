import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import putDocuments from '../../CustomHooks/putDocument';
import UseCollectArray from '../../CustomHooks/UseCollectArray';
import MoreInput from '../../Utility-Component/MoreInput';
import ViewProducts from './Products/ViewProducts';
const AddProduct = () => {
  const [product, setProduct] = useState([]);
  const { handleAdd, handleChange, handleRemove, val, setVal } =
    UseCollectArray();
    const { data: totalProducts = [],refetch,isLoading,isRefetching,isError} = useQuery({
        queryKey: ['totalProducts','64161bb6a541e87d78c95b47'],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:8000/products/64161bb6a541e87d78c95b47`
          );
          const data = await res.json();
          // setProduct(data.products)

          return data;
        },
        

    
      });

  const handleProduct = () => {
    const products = [...val];
    putDocuments(
      'http://localhost:8000/addProducts',
      { products },
      '64161bb6a541e87d78c95b47'
    );
    refetch()
    window.location.reload()
    
    // setProducts([])
    // postDocuments('http://localhost:8000/products',{products})
  };
 
  return (
    <section>
      <div className='flex jusify-center'>
        <div className='w-1/2 mx-4 border px-6 my-6 '>
          <MoreInput
            handleAdd={handleAdd}
            handleChange={handleChange}
            handleRemove={handleRemove}
            val={val}
            setVal={setVal}
            component={'Products'}
          />
          <div className='flex justify-center'>
            <button className='btn btn-primary' onClick={() => handleProduct()}>
              Add Product
            </button>
          </div>
          
        </div>

        <div className='my-6 mx-4'>
          <ViewProducts totalProducts={totalProducts} setProduct={setProduct} isLoading={isLoading} isRefetching={isRefetching} refetch={refetch}></ViewProducts>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
