import React, { useEffect, useState } from 'react';
import Heading from '../../../Utility-Component/Heading';
import Table from '../../../Utility-Component/Table/Table';
import Spinner from '../../../Utility-Component/Spinner';
import TBTable from './TBTable';
import { UidGenarate } from '../Orders/View PO/Reducer/intialState';
import { useGetBuyersQuery, useGetPiListQuery } from '../../../../Redux/Features/api/apiSlice';
import InputDropDown from '../../../Utility-Component/Form/InputDropDown';
import Searching from '../../../Utility-Component/Filters/Searching';

const tableHeadings = [
  {
    id: 10,
    heading: 'SL'
  },
  {
    id: 4,
    heading: 'TB NUMBERS'
  },
  {
    id: 5,
    heading: "PI NUMBER"
  }, {
    id: UidGenarate(),
    heading: 'COMPANY NAME'
  }
];
const TBList = ({ selectedValues, setSelectedValues, handlePi }) => {
  const [url, setUrl] = useState('/tbList')
  const [completed, setCompleted] = useState(false)
  const { data: tbLists = [], isLoading, isError, refetch } = useGetPiListQuery(url)
  const { data = [], isLoading: listLoading } = useGetBuyersQuery(undefined, {
    refetchOnMountOrArgChange: 600,
    
  })
  if (isLoading && listLoading) {
    return <Spinner />;
  }
  const createdTB = [...new Set(tbLists.flatMap(item => item.tbArray))];
  const handleCheckboxChange = (event) => {
  const selectedValue = event.target.value
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedValues([...selectedValues, selectedValue]);
    } else {
      setSelectedValues(selectedValues.filter(value => value !== selectedValue));
    }
  };
  let matchedCompany
  if (selectedValues.length !== 0) {
    matchedCompany = tbLists.find(item => item.tbNumber === selectedValues[0])
  }

  const { companyList = {} } = data[0]
  const handleInputDropdown = (e) => {
    setUrl(`/tbList?companyName=${e.target.value}`)
  }
  const handleSearch = (text) => {
    setUrl(`/tbList?tbNumber=${text}`)
  }
  const handleAll = () => {
    setUrl(`/tbList`)
  }
  return (
    <>
      <Heading heading={'TB NUMBER LISTS'} />
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <button className='block border-b border-white shadow rounded bg-white h-[3rem] hover:bg-gray-200  px-2 font-semibold mt-4 ml-4 ' onClick={handleAll}> ALL</button>
          <InputDropDown
            divclass={'my-2'}
            handleInputDropdown={handleInputDropdown}
            className={`select  mx-4 max-w-xs`}
            options={companyList}
            sectionName={'companyName'}
            placeholder={'Filter By Company'}
          />
        </div>
        <Searching handleSearch={handleSearch} placeholder={'TB NUMBER...'} />
      </div>
      <div className="join shadow-sm mx-2 my-2 cursor-pointer ">
        <a className={`join-item mx-2 text-md border-b p-2 border-md rounded-t-sm border-md rounded-e-xl ${completed ?" font-semibold p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-red-300 text-white ":"bg-gray-400 text-white" }`} onClick={()=>setCompleted(true)}>Completed</a>
        <a className={` join-item border-b text-md  p-2  rounded-t-sm border-md rounded-e-xl ${!completed ? "font-semibold p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-red-300 text-white ":"bg-gray-400 text-white" }`} onClick={()=>setCompleted(false)} >Not Completed</a>
      </div>
      <Table tableHeadings={tableHeadings} tableData={[]} >
        {tbLists?.filter(item => completed? createdTB.includes(item.tbNumber) : !createdTB.includes(item.tbNumber))
        .map((item) => (
          <TBTable key={UidGenarate()} selectedValues={selectedValues} createdTB={createdTB} matchedCompany={matchedCompany?.companyName} handlePi={handlePi} handleCheckboxChange={handleCheckboxChange} piNumbers={item} />
        ))}
      </Table>
      <div className='m-6'>
        <label htmlFor="my-modal-6" className={`btn btn-md btn-accent ${!selectedValues.length > 0 && 'hidden'}`} data-tip="Delete Order" onClick={handlePi}> Make PI</label>
      </div>
    </>
  );
};

export default TBList;
