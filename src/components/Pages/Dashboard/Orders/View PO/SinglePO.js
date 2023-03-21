import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Heading from '../../../../Utility-Component/Heading';
import Table from '../../../../Utility-Component/Table/Table';
import DetailPOProduct from './DetailPOProduct';
import PoTable from './PoTable';

const SinglePO = () => {
  const poDetail = useLoaderData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const {
    companyName,
    buyerName,
    poNumber,
    productName,
    quantity,
    targetDate,
    style,
    orderedDate,
    _id,
  } = poDetail;
  const tableHeadings = [
    {
      id: 111,
      heading: 'Ord. QTY',
      class: 'w-4',
    },
    {
      id: 112,
      heading: 'ORD. RATE',
      class: 'w-4',
    },
    {
      id: 113,
      heading: 'ACT. RATE',
      class: 'w-4',
    },
    {
      id: 114,
      heading: 'AMOUNT',
      class: 'w-4',
    },
    {
      id: 116,
      heading: 'SIZE',
      class: 'w-4',
    },
    {
      id: 117,
      heading: 'T. QTY.',
      class: 'w-4',
    },
    {
      id: 118,
      heading: 'REST QTY.',
      class: 'w-4',
    },
    {
      id: 119,
      heading: 'DEL. QTY.',
      class: 'w-4',
    },
    {
      id: 124,
      heading: 'STATUS',
      class: 'w-4',
    },
  ];
  const onSubmit=(obj)=>{
    console.log(obj)
  }
  return (
    <div>
      <Heading heading={`Your Selected PO Number : ${poNumber}`}></Heading>
      <DetailPOProduct properties={poDetail}></DetailPOProduct>

      <Table tableHeadings={tableHeadings} tableData={[]}>
   
        <PoTable quantity={quantity} />
       
      </Table>
    </div>
  );
};

export default SinglePO;
