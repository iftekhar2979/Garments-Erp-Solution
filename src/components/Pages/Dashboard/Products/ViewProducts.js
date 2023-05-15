
import React from 'react';
import { useMutation } from 'react-query';
import { contextState } from '../Orders/View PO/Reducer/intialState';
import { computeHeadingLevel } from '@testing-library/react';
import { toast } from 'react-hot-toast';
const ViewProducts = ({totalProducts,data,isLoading,refetch}) => {
 
    if(isLoading){
        return <h1 className="text-4xl">Loading...</h1>
    }
 

    const {products}=totalProducts
    // const [deleteMutation, { status, error }] = useMutation(handleRemove);
const handleRemove = async (name) => {
    const res=await fetch(`http://localhost:8000/products/64161bb6a541e87d78c95b47?productName=${name}`,{
        method:'DELETE'
    })
   const data=await res.json()
  if(data.isUpdated){
    const notify = () => toast(`${name} remove product Succesfully`);
          
    notify()
  }
   refetch()

};
    
    return (
        <>
        <h1 className="text-4xl text-center my-6">Your Total Products {data?.length}</h1>
        <hr />
        <div className="grid grid-cols-3 gap-3 ">
            {
                products?.map(item=>{
                    return(

                            <button className="btn btn-md btn-success " onClick={()=>handleRemove(item)}>{item}<span className='p-2 px-6  hover:bg-red-600'>x</span></button>
                      
                
                )}
                    )
            }
        </div>
        </>
    );
};

export default ViewProducts;