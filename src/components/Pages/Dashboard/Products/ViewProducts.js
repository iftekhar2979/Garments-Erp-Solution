
import React from 'react';
import putDocuments from '../../../CustomHooks/putDocument';
const ViewProducts = ({totalProducts,isLoading,isRefetching,refetch,setProduct}) => {
  
    if(isLoading){
        return <h1 className="text-4xl">Loading...</h1>
    }
    const {products}=totalProducts
    // console.log(products)
     const handleRemove=(selectedItem)=>{
        console.log(selectedItem)
        putDocuments('http://localhost:8000/removeProducts',{selectedItem},'64161bb6a541e87d78c95b47')
       
       refetch()
     }
    
    return (
        <>
        <h1 className="text-4xl text-center my-6">Your Total Products {totalProducts?.length}</h1>
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