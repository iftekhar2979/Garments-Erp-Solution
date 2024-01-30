import react from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { UidGenarate } from '../Reducer/intialState';
import ToogleTable from '../../../../../Utility-Component/Table/ToogleTable';
import Table from '../../../../../Utility-Component/Table/Table';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Chalan from '../Chalan/Chalan';


const tableHeadings = [
    {
        id: UidGenarate(),
        heading: 'STYLE NAME'
    },
    {
        id: UidGenarate(),
        heading: 'COLOR NAME'
    },
    {
        id: UidGenarate(),
        heading: 'DELIVERY DETAILS'
    }, {
        id: UidGenarate(),
        heading: 'REST DETAILS'
    }
]
const SingleDetailDelivery = () => {
   const detail=useLoaderData()

   const handleToggleClick=(item)=>{
    // console.log(item)
}
    return (
       <>
        <Table tableHeadings={tableHeadings} tableData={[]} >

{
    detail?.details.map(item => <ToogleTable key={item._id} data={item}></ToogleTable>)
}
<tr className='h-12 border'>
    <td></td>
    <td></td>
    <td className=''> Delivery Qty: <span className='font-bold'>{detail.grandDeliveryQuantity}</span></td>
    
   <td ><Link to={`/chalan/${detail._id}`} onClick={() => handleToggleClick(detail)} className='link-secondary link ' >Make Chalan</Link></td>
   {/* <PDFDownloadLink document={<Chalan></Chalan>} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink> */}
</tr>
</Table>
       </>
    )
};
export default SingleDetailDelivery;