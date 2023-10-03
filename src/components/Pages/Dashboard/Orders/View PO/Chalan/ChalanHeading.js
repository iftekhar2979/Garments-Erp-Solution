import react, { useContext, useState } from 'react';
import { UidGenarate } from '../Reducer/intialState';
import InputDropDown from '../../../../../Utility-Component/Form/InputDropDown'
import { ViewContextProvider } from '../../../../../contextApi/ViewContext';



const section = ['STYLE', 'N/A']
const size = ['COLOR', 'SIZE', 'N/A']

const ChalanHeading = ({ sizeSystem, tableState, block, handleInputDropdown }) => {
  const { poState, sizeName } = useContext(ViewContextProvider)
  return (
    <>
      {(sizeSystem === 'L-W-H' || sizeSystem === 'singleInput' || sizeSystem === 'SM-XL') &&
        <>
          <th className={`border  w-24 border-black ${tableState['Style'] === 'N/A' && 'hidden'}`}>
            <InputDropDown sectionName={'Style'} labelblock={true} handleInputDropdown={handleInputDropdown} options={section} className={`text-center  w-[75px] text-[14px] ${block && 'appearance-none'}`} defaultValue={section[0]} />

          </th>
          <th className={`border   w-44 border-black ${tableState['Color'] === 'N/A' && 'hidden'}`}>
            <InputDropDown sectionName={'Color'} labelblock={true} handleInputDropdown={handleInputDropdown} options={size} className={`text-center w-[150px]  text-md ${block && 'appearance-none'}`} defaultValue={size[0]} />
          </th>
          <th class="  text-[14px] border border-black" style={{
            paddingBottom: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
            paddingTop: '0px',
          }}>
            DELIVERED

            {
              sizeSystem === 'SM-XL' && <tr className=' '>
                {sizeName?.map((item, i) => <td key={i} className='text-[12px] border-black border-t  w-[90px]  ' style={{
                  paddingBottom: "0px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  paddingTop: '0px',
                }}>{item}</td>)}

              </tr>
            }
          </th>
          <th className={`border border-black w-[100px] text-xs pb-1`}>
            SUB TOTAL
          </th>
        </>
      }
      {/* // LWHtableHeadings?.map(item => <th key={item.id} className={`border py-1 ${item.class}`}>{item.heading}</th>)
                // : tableHeadings?.map(item => <th key={item.id} className={`border py-1 ${item.class}`}>{item.heading}</th>)} */}
    </>
  )
};
export default ChalanHeading;