
import React from 'react';
import { useDeleteProductMutation } from '../../../../Redux/Features/api/apiSlice';
import toast from 'react-hot-toast';
import { useGetProductSummaryQuery } from '../../../../Redux/Features/api/apiSlice';
import { UidGenarate } from '../Orders/View PO/Reducer/intialState';
import Table from '../../../Utility-Component/Table/Table';
// import React, { PureComponent } from 'react';

const tableHeadings = [
    {
        id: UidGenarate(),
        heading: 'Product Name',
        class:'text-center'

    },
    {
        id: UidGenarate(),
        heading: 'Ordered Quantity',
        class:'text-center'

    },
    {
        id: UidGenarate(),
        heading: 'Delivered Quantity',
        class:'text-center'

    },
    {
        id: UidGenarate(),
        heading: 'Rest Quantity',
        class:'text-center'

    }, {
        id: UidGenarate(),
        heading: 'Order Count',
        class:'text-center'

    },

]
const ViewProducts = ({ totalProducts, data, isLoading, refetch }) => {

    const [deleteProduct, { isSuccess, isError }] = useDeleteProductMutation()
    if (isLoading) {
        return <h1 className="text-4xl">Loading...</h1>
    }
    if (isSuccess) {
        const notify = () => toast.error('Deleted product Succesfully');
        notify()
    }

    

    const handleRemove = async (name) => {
        deleteProduct(name)
    };

    return (
        <>

            {/* <h1 className="text-4xl text-center my-6">Your Total Products {data?.length}</h1> */}
            <hr />
            <div className="">
                <Table tableHeadings={tableHeadings} tableData={[]}>
                    {
                        totalProducts?.map(item => {
                            let { product_Name, total_Rest_Quantity, total_Ordered_Quantity, Order_Count } = item
                            return (
                                <>
                                    <tr>
                                        <td className='mx-2 border text-md text-center'>{product_Name}</td>
                                        <td className='mx-2 border text-md text-center'>{total_Ordered_Quantity}</td>
                                        <td className='mx-2 border text-md text-center'>{(total_Ordered_Quantity - total_Rest_Quantity)||0}</td>
                                        <td className='mx-2 border text-md text-center'>{total_Rest_Quantity}</td>
                                        <td className='mx-2 border text-md text-center'>{Order_Count}</td>
                                        <td className='mx-2 border text-md text-center'><button className="btn btn-md btn-error " onClick={() => handleRemove(product_Name)}>X</button></td>

                                    </tr>
                                </>

                            )
                        }
                        )
                    }
                </Table>
            </div>
        </>
    );
};

export default ViewProducts;