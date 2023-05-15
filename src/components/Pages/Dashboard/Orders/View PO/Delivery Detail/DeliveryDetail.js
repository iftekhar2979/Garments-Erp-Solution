import react, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { UidGenarate } from '../Reducer/intialState';
import Table from '../../../../../Utility-Component/Table/Table';
import TableContent from '../../../../../Utility-Component/Table/TableContent';
import DetailTable from '../DetailTable';
import ToogleTable from '../../../../../Utility-Component/Table/ToogleTable';
import SingleDetailDelivery from './SingleDetailDelivery';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const tableHeadings = [
    {
        id: UidGenarate(),
        heading: 'STYLE'
    },
    {
        id: UidGenarate(),
        heading: 'COLOR'
    },
    {
        id: UidGenarate(),
        heading: 'DELIVERY DETAILS'
    }, {
        id: UidGenarate(),
        heading: 'REST DETAILS'
    }
]
const lwhTableHeading=[
    {
        id: UidGenarate(),
        heading: 'STYLE'
    },
    {
        id: UidGenarate(),
        heading: 'SIZE'
    },
    {
        id: UidGenarate(),
        heading: 'DELIVERY DETAILS'
    }, {
        id: UidGenarate(),
        heading: 'REST DETAILS'
    }
]
const DeliveryDetail = () => {
    const data = useLoaderData()
    console.log(data)
    const count = 0
    const [currentIndex, setCurrentIndex] = useState(0);
    const [size_system, set_size_system] = useState();
    
useEffect(()=>{
    axios.get(`http://localhost:8000/orderList/${data[0]?.orderId}`)
    .then(res=>set_size_system(res.data.sizeSystem))
})
    const handleToggleClick = (id) => {
        setCurrentIndex(id)
        console.log(data[id])
    }
// console.log(size_system)

    return (
        <div>
            <h1 className='text-3xl text-center'>Total Delivered Quantity Details</h1>
            {data?.map((item, index) => <button key={item._id} onClick={() => handleToggleClick(index)} className={`btn  ml-3 my-3 ${currentIndex === index ? 'btn-primary ' : 'text-white bg-gray-300 rounded focus:outline-none'}`}> DELIVERY DATE-{item.createdAt}</button>)}
            {currentIndex !== null && (
                <Table tableHeadings={size_system==='L-W-H' ?lwhTableHeading:tableHeadings} tableData={[]} >

                    {
                        data[currentIndex].details?.map(item => <ToogleTable key={item._id} size_system={size_system} data={item}></ToogleTable>)
                    }
                    <tr className='h-12 border'>
                        <td></td>
                        <td></td>
                        <td className=''> Delivery Qty: <span className='font-bold'>{data[currentIndex].grandDeliveryQuantity}</span></td>
                       <td ><Link to={`/chalan/${data[currentIndex]._id}`}><button className='btn btn-secondary btn-sm' >Make Chalan</button></Link></td>
                    </tr>
                </Table>

            )}
           
                {/* {Array.isArray(data) && data?.map((item, index) => <NavLink key={item._id} to={`/dashboard/po/singledeliveryDetail/${item._id}`}><button key={item._id}  className={`btn  ml-3 my-3 btn-primary`}> DELIVERY DATE-{item.createdAt } </button></NavLink>)}
          
            <Outlet/> */}
           
            {/* {currentIndex !== null && (

                <Table tableHeadings={tableHeadings} tableData={[]} >

                    {
                        data[currentIndex].details?.map(item => <ToogleTable key={item._id} data={item}></ToogleTable>)
                    }
                    <tr className='h-12 border'>
                        <td></td>
                        <td></td>
                        <td className=''> Delivery Qty: <span className='font-bold'>{data[currentIndex].grandDeliveryQuantity}</span></td>
                       <td ><Link to='/chalan'><button className='btn btn-secondary btn-sm' onClick={()=>handleChalan(data[currentIndex])}>Make Chalan</button></Link></td>
                    </tr>
                </Table>

            )} */}
        </div>
    )
};
export default DeliveryDetail;