
import React from 'react';

const ViewProducts = ({totalProducts,isLoading,isRefetching}) => {
 const {products}=totalProducts
     if(isLoading || isRefetching){
        return <h1 className="text-4xl">Loading...</h1>
     }
    
    return (
        <>
        <h1 className="text-4xl text-center my-6">Your Total Products {products?.length}</h1>
        <hr />
        <div className="grid grid-cols-3 gap-3">
            {
                products?.map(item=>{
                    return(

                            <button className="btn btn-sm">{item}</button>
                      
                
                )}
                    )
            }
        </div>
        </>
    );
};

export default ViewProducts;