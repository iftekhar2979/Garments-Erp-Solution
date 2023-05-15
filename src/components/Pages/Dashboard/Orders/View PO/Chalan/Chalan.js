import react, { useEffect, useRef, useState } from 'react';
import logo from '../../../../../../Assets/Pad-Print.png'
import Table from '../../../../../Utility-Component/Table/Table';

import { UidGenarate } from '../Reducer/intialState';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { ViewContextProvider } from '../../../../../contextApi/ViewContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Page } from '@react-pdf/renderer';
import ChalanTable from './ChalanTable';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
const tableHeadings = [
    {
        id: UidGenarate(),
        heading: 'STYLE',
        class:'w-[100px]'
    },
    {
        id: UidGenarate(),
        heading: 'COLOR',
        class:'w-[110px]'
    },
    {
        id: UidGenarate(),
        heading: 'DELIVERED SIZES',
        class:'w-1/2'
    },
    {
        id: UidGenarate(),
        heading: 'Sub Total',
        class:'w-16'
    }
]
const LWHtableHeadings = [
    {
        id: UidGenarate(),
        heading: 'STYLE',
        class:'w-[100px]'
    },
    {
        id: UidGenarate(),
        heading: 'SIZE',
        class:'w-[110px]'
    },
    {
        id: UidGenarate(),
        heading: 'DELIVERED SIZES',
        class:'w-1/2'
    },
    {
        id: UidGenarate(),
        heading: 'Sub Total',
        class:'w-16'
    }
]
const Chalan = () => {
    const deliveryDetail = useLoaderData()
    let componentRef = useRef();
    const [block,setBlock]=useState(false)
    // const [date,setDate]=useState(new Date())
   
    const { createdAt, details,grandDeliveryQuantity,chalanNumber } = deliveryDetail
  
    const handlePrint = ()=>{
        setBlock(true)
        setTimeout(() => {
            
            window.print()
            setBlock(false)
          }, 10);
         
    }
    const { data: companyAndOtherDetail = [], refetch, isLoading } = useQuery({
        queryKey: [deliveryDetail?.orderId],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/orderList/${deliveryDetail?.orderId}`);
            const data = await res.json();
            return data;
        },
    });
    
    if (isLoading) {
        return <h1 className='text-3xl'>Loading...</h1>
    }
    const { companyName, buyerName, productName, range,sizeSystem } = companyAndOtherDetail
    //   console.log(companyAndOtherDetail)
 

    return (

        <page size="A4" ref={componentRef}>
            <div className='flex justify-center'>
                <img src={logo} ></img>

            </div>
            <div className='ml-10 my-4'>
                <div className='flex justify-between'>


                    <div className=''>
                        <h1 className=''>COMPANY NAME : {companyName}</h1>
                   
                        <h1 className=''>BUYER NAME : {buyerName}</h1>
                        <h1 className=''>PRODUCT NAME : {productName}</h1>
                       
                        <h1 className=''>RANGE : {range}</h1>
                        <h1 className=''>TB NO :</h1>
                    </div>
                    <div className='mr-16'>
                        <h1>Chalan No : 000{chalanNumber && chalanNumber}</h1>
                        <h1>Date : {createdAt}</h1>
                        <h1>Thought By : ___________________</h1>
                    </div>
                </div>

            </div>
            <div >
                <h1 className='text-center font-bold text-2xl'>Delivery Detail</h1>
            </div>
            <div className='flex w-full justify-center'>
                <table className='my-3 w-full mx-2'>
                    <thead className='border'>
                        {sizeSystem==='L-W-H'?
                        LWHtableHeadings?.map(item => <th key={item.id} className={`border py-1 ${item.class}`}>{item.heading}</th>)
                        :tableHeadings?.map(item => <th key={item.id} className={`border py-1 ${item.class}`}>{item.heading}</th>)}
                        {/* {{${sizeSystem==='L-W-H'}?LWHtableHeadings:tableHeadings}?.map(item => <th key={item.id} className={`border py-1 ${item.class}`}>{item.heading}</th>)} */}
                    </thead>
                    <tbody>
                        {
                        details?.map((item)=><ChalanTable key={item._id} props={item} sizeSystem={sizeSystem}/>)
                    }
                    {/* <td colspan="2" className='w-96 border text-center'>Total </td> */}
                    <td colspan="3" className=' border text-center'>Total </td>
                    <td  className=' border '><span className=''>{grandDeliveryQuantity}</span></td>
                    </tbody>
                </table>
            </div>
            <div className='mx-2 '>
                <h2>Received the above in good condition</h2>
            </div>
            <div className='flex justify-between relative mx-2 top-24 '>                     
                        <p className='overline'>Cheacked & Recieved by</p>                                
                        <p className='overline'>Store Manager</p>
                        <p className='overline'>Factory Manager</p>            
                        <p className='overline'>Authoresed Signature</p>
            </div>
  
 <div className='text-right'>

 <button className={`${block && 'hidden'} btn btn-primary `} onClick={handlePrint}>Print this out!</button>
 </div>

        </page>

    )
};
export default Chalan;