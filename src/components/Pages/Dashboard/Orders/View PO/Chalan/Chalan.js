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

import ChalanHeading from './ChalanHeading';
import useDocumentTitle from '../../../../../CustomHooks/useDocumentTitle';
import InputDropDown from '../../../../../Utility-Component/Form/InputDropDown';
import { format } from 'date-fns';
import Spinner from '../../../../../Utility-Component/Spinner';
import { useGetDeliveryManQuery } from '../../../../../../Redux/Features/api/apiSlice';

const tableHeading2 = [
    {
        id: UidGenarate(),
        heading: 'STYLE',
        class: 'w-[100px]'
    },
    {
        id: UidGenarate(),
        heading: 'COLOR',
        class: 'w-[110px]'
    },
    {
        id: UidGenarate(),
        heading: 'DELIVERED SIZES',
        class: 'w-1/2'
    },
    {
        id: UidGenarate(),
        heading: 'SUB TOTAL',
        class: 'w-16'
    }
]
const tableHeadings = [
    {
        id: 111,
        heading: 'Style',
        className: ' w-36 px-2',
    },
    {
        id: 987,
        heading: 'Details',
        className: " "
    },
];
let sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const deliveryManArray = ['Mr. Anwar', 'Mr. Shahin','Mr. Taleb', 'Mr. Rahman', 'Mr. Sarwar','Mr. Alamin']
const Chalan = () => {
    const deliveryDetail = useLoaderData()
    const {data:deliveryMens,isLoading:deliveryManLoading}=useGetDeliveryManQuery(undefined,{
        refetchOnMountOrArgChange:600,
        keepUnusedDataFor:600
    })
    const { createdAt='', details, grandDeliveryQuantity, chalanNumber, _id, deliveryMan } = deliveryDetail
    useDocumentTitle(`Challan No:${chalanNumber}`)
    let componentRef = useRef();
    const [block, setBlock] = useState(false)
    const [tableState, setTableState] = useState({})
    const [totalArrayDetail, setTotalArrayDetails] = useState({})

    useEffect(() => {
        const totalObj = details?.reduce((acc, cur) => {
            let firstLetter = cur.style
            if (firstLetter in acc) {
                acc[firstLetter] = [...acc[firstLetter], cur]
            } else {
                acc[firstLetter] = [cur]
            }
            return acc
        }, {})
        setTotalArrayDetails(totalObj)

    }, [details])
   
    const handleDeliveryMan = (e) => {
        axios.patch(`${process.env.REACT_APP_DEVELOPMENT_URL}/selectDeliveryMan/${_id}`, { deliveryMan: e.target.value },{withCredentials:true})
            .then(res => {
                return res.data
            })
            .catch(error => console.log(error))
    }
    const handlePrint = () => {
        setBlock(true)
        setTimeout(() => {
            window.print()
            setBlock(false)
        }, 10);

    }
    const { data: companyAndOtherDetail = [], refetch, isLoading } = useQuery({
        queryKey: [deliveryDetail?.orderId],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_DEVELOPMENT_URL}/orderList/${deliveryDetail?.orderId}`,{credentials:'include'});
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Spinner/>
    }
    const { companyName, buyerName, productName,tbNumber='', range, sizeSystem, location, quantityOrder } = companyAndOtherDetail


    const handleInputDropdown = (e) => {
        setTableState((prev) => {
            return { [e.target.name]: e.target.value, ...prev }
        })
    }

    return (
<>
     <page>
            <div className='flex justify-center' >
                <img src={logo} className='w-2/3'></img>
            </div>
            <div className='ml-10 my-4 w-10/12 text-black text-sm' >
                <div className='flex justify-between'>
                    <div className=''>
                        <h1 className=''>COMPANY NAME : {companyName}</h1>
                        <h1 className=''>ADDRESS : {location}</h1>

                        <h1 className=''>BUYER NAME : {buyerName}</h1>
                        <h1 className=''>PRODUCT NAME : {productName}</h1>

                        {!(range === 'N/A') && <h1 className=''>RANGE : {range}</h1>}
                        <h1 className=''>TB NO : {tbNumber}</h1>
                    </div>
                    <div className=''>
                        <h1>Challan No : 00{chalanNumber && chalanNumber}</h1>
                        <h1>Date : {createdAt && format(new Date(createdAt),'PP' )}</h1>
                        <h1 className='inline'>Through By : </h1>
                        <>  <InputDropDown divclass={'inline'} placeholder={deliveryMan?deliveryMan:'Select Delivery Man'} sectionName={'deliveryMan'} labelblock={true} handleInputDropdown={(e) => handleDeliveryMan(e)} options={deliveryMens?.deliveryMan} className={` w-32 text-md ${block && 'appearance-none'}`} />
                        </>
                    </div>
                </div>
            </div>
            <div >
                <h1 className='text-center font-bold text-xl text-black'>Delivery Challan</h1>
            </div>
            <div className='flex w-[842px]  justify-center' >
                <table className='my-2 text-sm  text-black mx-2 border-black'>
                    <thead className='border border-black'>
                        <ChalanHeading sizeSystem={sizeSystem} block={block} handleInputDropdown={handleInputDropdown} tableState={tableState} />
                    </thead>
                    <tbody>
                        {
                            details?.map((item) => <ChalanTable key={item._id} props={item} tableState={tableState} totalArrayDetail={totalArrayDetail} sizeSystem={sizeSystem} />)
                        }
                        <tr><td colSpan={` ${(tableState['Style'] === 'N/A' && tableState['Color'] === 'N/A') ? '1' : (tableState['Style'] === 'N/A' || tableState['Color'] === 'N/A' ? '2' : '3')}`} className=' border border-black text-center'>Total </td>
                            <td className=' border border-black text-center'><span className=''>{grandDeliveryQuantity}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mx-2 text-black '>
                <h2>Received the above in good condition</h2>
            </div>
            <div className='flex justify-between relative mx-2 top-24 text-black'>
                <p className='overline'>Checked & Received by</p>
                <p className='overline'>Store Manager</p>
                <p className='overline'>Factory Manager</p>
                <p className='overline'>Authorized Signature</p>
            </div>
            <div className='text-right'>
                <button className={`${block && 'hidden'} btn btn-primary `} onClick={handlePrint}>Print this out!</button>
            </div>     
            </page>   
</>
    )
};
export default Chalan;