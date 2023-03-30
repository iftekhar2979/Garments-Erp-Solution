import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import Heading from '../../../../Utility-Component/Heading';
import Table from '../../../../Utility-Component/Table/Table';
import PoTable from './PoTable';
const tableHeadings = [
  {
    id: 111,
    heading: 'Style',
    class: 'border font-medium text-gray-900 w-24 px-2',
  },
  {
    id: 987,
    heading: 'Details',
  },
];

const SinglePO = () => {
  const poDetail = useLoaderData();
  const {setPoState}=useContext(ViewContextProvider)
 useEffect(()=>{
  setPoState(poDetail)
 },[poDetail,setPoState])
 
  const { orderNumber, style } = poDetail;

  return (
    <div>
      <Heading heading={`Your Selected PO Number : ${orderNumber}`}></Heading>
      {/* <DetailPOProduct properties={poDetail}></DetailPOProduct> */}

      <Table tableHeadings={tableHeadings} tableData={[]}>
        {/* {color.map(item=><PoTable color={item} quantity={quantity} />)} */}
        {style?.map((item, index) => (
          <PoTable
            style={item}
            key={index}
           
            
          />
        ))}

        {/* {new Array(style?.color).map(item=><PoTable color={item} quantity={quantity} />)}} */}
      </Table>
    </div>
  );
};

export default SinglePO;
