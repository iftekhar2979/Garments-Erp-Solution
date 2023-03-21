import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Heading from '../../../../Utility-Component/Heading';

const SinglePO = () => {
    const poDetail=useLoaderData()
    const {companyName,buyerName,poNumber,productName,quantity,targetDate,style,orderedDate,_id}=poDetail
    return (
        <div>
            <Heading heading={'Selected PO Number'}></Heading>
            <h1>Selected PO Number : {poNumber}</h1>
        </div>
    );
};

export default SinglePO;