import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseCollectArray from '../../../CustomHooks/UseCollectArray';
import MoreInput from '../../../Utility-Component/MoreInput';
import ViewProducts from '../Products/ViewProducts';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const AddProduct = () => {
  const [product, setProduct] = useState([]);
  // const [data,setData]=useState()
  const { handleAdd, handleChange, handleRemove, val, setVal } =
  UseCollectArray();
  const { data: totalProducts = [],refetch,isLoading,isRefetching,isError} = useQuery({
    queryKey: ['totalProducts','64161bb6a541e87d78c95b47'],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/products/64161bb6a541e87d78c95b47`
        );
        const data = await res.json();
        setProduct(data)
        return data;
      },   
    });
    const { mutate, } = useMutation(
      async () => {
        const response = await fetch('http://localhost:8000/addProducts/64161bb6a541e87d78c95b47', {
          method: 'PUT',
          body: JSON.stringify([...val]),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const myData = await response.json();
        return myData;
      },
      {
        onSuccess: () => {
          const notify = () => toast('AddED product Succesfully');
          notify()
        },
        onError: (error) => {
          return (<h1>{error}</h1>)
        },
      }
      );
      
      if(isError){
        return (<h1>{isError.error}</h1>)
      }
      
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
            <button className='btn btn-primary' onClick={() =>{mutate() 
              refetch()}}>
              Add Product
            </button>
          </div>  
        </div>
        <div className='my-6 mx-4'>
          <ViewProducts totalProducts={totalProducts} refetch={refetch}  isLoading={isLoading} ></ViewProducts>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
