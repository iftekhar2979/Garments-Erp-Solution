import React from 'react';
import Heading from '../../../../Utility-Component/Heading';

const DetailPOProduct = ({properties}) => {
    const {companyName,buyerName,productName,orderNumber,style}=properties

    return (
        <div className='flex justify-center bg-gray-100 p-4'>
        <div className='border shadow-xl p-6 '>
          <Heading heading={'Selected Product Details'}></Heading>

          <h1 className='text-2xl'>
            {' '}
            COMPANY NAME : <span className='text-xl'>{companyName}</span>
          </h1>
          <h1 className='text-2xl'>
            {' '}
            Buyer NAME : <span className='text-xl'>{buyerName}</span>
          </h1>
          <h1 className='text-2xl'>
            {' '}
            PRODUCT NAME : <span className='text-xl'>{productName}</span>
          </h1>
          <h1 className='text-2xl'>
            {' '}
            PO Number : <span className='text-xl'>{orderNumber}</span>
          </h1>
          <h1 className='text-2xl'>
            {' '}
            Style : <span className='text-xl'>{style}</span>
          </h1>
        </div>
      </div>
    );
};

export default DetailPOProduct;