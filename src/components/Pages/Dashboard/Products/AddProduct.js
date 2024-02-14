
import UseCollectArray from '../../../CustomHooks/UseCollectArray';
import MoreInput from '../../../Utility-Component/MoreInput';
import ViewProducts from '../Products/ViewProducts';
import useDocumentTitle from '../../../CustomHooks/useDocumentTitle';
import { useAddProductMutation, useDeleteProductMutation, useGetProductsQuery, useGetProductSummaryQuery } from '../../../../Redux/Features/api/apiSlice';
// import {  } from '../../../../Redux/Features/api/summaryApiSlice';
import Spinner from '../../../Utility-Component/Spinner';
import { Area, AreaChart, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Cell, ComposedChart, Bar, Line, Scatter } from 'recharts';
import { Legend } from 'chart.js';
import toast from 'react-hot-toast';
import { PureComponent } from 'react';
import Alert from '../../../Utility-Component/Alert/Alert';

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">
          {payload.value}
        </text>
      </g>
    );
  }
}
const AddProduct = () => {
  const { data: {products}=[], isLoading, isError } = useGetProductsQuery()
  const { data: summaryData = [], isLoading: summaryLoading ,isError:summaryError} = useGetProductSummaryQuery()
  const [addProduct, { isSuccess: addingProuductSuccess, isError: addingProductError }] = useAddProductMutation()
  useDocumentTitle('PRODUCT-DASHBOARD')
  const { handleAdd, handleChange, handleRemove, val, setVal } =
    UseCollectArray();

//pie chart
// console.log(products)
if (summaryLoading) {
  return <Spinner />
}
if(summaryError){
  return <Alert alertDescription={'Something Error in Server Please Try Again'} className={'w-fit mx-auto my-6'} role={'alert alert-warning'}/>
}
  const handleADD = () => {
    // mutate() 
    addProduct([...val]).then(res=>{
      if(res.data){
        const notify=toast.success('Added Product Successfully')
        notify()
      }
    }).catch(error=>{
      const notify=toast.error('Server Side Error')
      notify()
    })

  }
  let content;
  if( !isLoading&&!isError&& products){
    content=  <ul className='text-center'>
    {products.length!==0 && products?.map(item=><li className='border-t border-b'>{item}</li>)}
    </ul>
     }
  return (
    <section>
      <div className='flex justify-between'>
      <div className='h-[600px] my-4 w-full bg-white shadow-md mx-2 p-6 rounded-md '>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={1000}
            height={1000}
            data={summaryData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_Name"  interval={0} height={200} tick={<CustomizedAxisTick/>} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Order_Count" stroke="#ffc658" fill="#ffc658" />
            {/* <Area type="monotone" dataKey="totalDeliveredQuantity" stroke="#8884d8" fill="#8884d8" /> */}
          </AreaChart>
        </ResponsiveContainer>
        <h2 className='font-bold text-md text-center' >Product Summary With Order</h2>
      </div>
      {/* <div className='h-96 my-4 w-1/2 bg-white shadow-md mx-2 p-6 rounded-md '>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={600}
          data={summaryData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_Name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="total_Ordered_Quantity" fill="#FBBC05" stroke="#8884d8" />
          <Bar dataKey="total_Rest_Quantity" barSize={20} fill="#4285F4" />
        </ComposedChart>
      </ResponsiveContainer>
        <h2 className='font-bold text-md text-center ' >Product Summary With Order Quantity and Rest Quantity</h2>
      </div> */}
      </div>
      <div className='my-6 py-6'>
        <div className='flex justify-center'>
        <div className='w-1/2 mx-4 py-4 border bg-white py-10 '>
          <MoreInput
            handleAdd={handleAdd}
            handleChange={handleChange}
            handleRemove={handleRemove}
            val={val}
            setVal={setVal}
            placeholder={'Add Product..'}
            // component={'Products'}
          />
          <div className='flex justify-center py-2'>
            <button className='btn btn-primary' onClick={handleADD}>
             {addingProuductSuccess?'Adding...':" Add Product"}
            </button>
          </div>
        </div>
          <div className='w-1/2  my-4 py-4 border bg-white  '>
              {content}
            </div>
        </div>
        <div className='my-6 mx-4'>
          <ViewProducts totalProducts={summaryData} isLoading={isLoading} ></ViewProducts>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
