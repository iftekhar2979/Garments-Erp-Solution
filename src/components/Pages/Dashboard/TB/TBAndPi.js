import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import TBList from './TBList';
import Modal from '../../../Utility-Component/Modal';
import axios from 'axios';
import { UidGenarate } from '../Orders/View PO/Reducer/intialState';
import Table from '../../../Utility-Component/Table/Table';
import ModalTable from './ModalTable';
import { useDispatch, useSelector } from 'react-redux';
import SubmitButton from './SubmitButton';
import { addTBNumbers, addTBNumbersAndDates, clearingState } from '../../../../Redux/Features/pi/piSlice';
import TotalTableOfPI from './TotalTableOfPI';
import { useGetDeliveryStatementMutation } from '../../../../Redux/Features/api/apiSlice';

const tableHeadings = [

  {
    id: UidGenarate(),
    heading: 'Products'
  },
  {
    id: UidGenarate(),
    heading: "Length X Width (CM)"
  },
  {
    id: UidGenarate(),
    heading: "COLOR"
  },
  {
    id: UidGenarate(),
    heading: "SIZE"
  },
  
   {
    id: UidGenarate(),
    heading: "QTY PCS"
  }, {
    id: UidGenarate(),
    heading: "Unit Price (USD)"
  }
  , {
    id: UidGenarate(),
    heading: "Total Amount (USD)"
  }
];
const TBAndPi = () => {
  const [selectedValues, setSelectedValues] = useState([])
  const [piData, setPiData] = useState([])
  const [amount,setAmount]=useState(0)
  const [getDeliveryStatement, { data: deliveryStatement, isSuccess }] = useGetDeliveryStatementMutation()
  
  // const {totalAmount=0} = useSelector(state => state.pI) 
  const dispatch=useDispatch()
  const handlePi = () => {
    dispatch(addTBNumbersAndDates(selectedValues))
    axios.post('http://localhost:8000/pi', { selectedValues })
    .then(res => setPiData(res.data))
  }

  return (
    <>
      <TBList setSelectedValues={setSelectedValues} handlePi={handlePi}  selectedValues={selectedValues} />

      <input type="checkbox" id='my-modal-6' className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl h-11/12">
          <label htmlFor='my-modal-6' className="btn btn-sm btn-circle absolute right-2 top-2" onClick={()=>dispatch(clearingState())}>✕</label>
          <h3 className="text-lg font-bold">Perfoma Invoice of {selectedValues && selectedValues?.map(item => `${item}  `)}</h3>
          <Table tableHeadings={tableHeadings} tableData={[]} >
            {piData?.map((item) => <>
            <ModalTable key={UidGenarate()} setAmount={setAmount} detail={item} /> 
            </>)}
         <TotalTableOfPI/>
          </Table>
          <div className="modal-action">
          <SubmitButton setSelectedValues={setSelectedValues}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TBAndPi;
