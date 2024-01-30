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
          <th className={`border  w-24 text-[10pt] border-black ${tableState['Style'] === 'N/A' && 'hidden'}`}>
            <InputDropDown sectionName={'Style'} labelblock={true} handleInputDropdown={handleInputDropdown} options={section} className={`text-center  w-[75px] text-[14px] ${block && 'appearance-none'}`} defaultValue={section[0]} />

          </th>
          <th className={`border text-[10pt] border-black ${tableState['Color'] === 'N/A' && 'hidden'} `}  style={{
            width:'150px'
              }}>
            <InputDropDown sectionName={'Color'} labelblock={true} handleInputDropdown={handleInputDropdown} options={size} className={`text-center w-[150px]  text-md ${block && 'appearance-none'}`} defaultValue={size[0]} />
          </th>
          <th className={`  text-[10pt]  border border-black ${sizeSystem !== 'SM-XL' && "w-[350px]  text-[10pt]"}`} style={{
        
          }}>
            DELIVERED

            {
              sizeSystem === 'SM-XL' && <tr className=' '>
                {sizeName?.map((item, i) => <td key={i} className=' border-black border-t w-[58px]  ' style={{
                padding:"0px 0px 0px 0px",
                fontWeight:'bold',
                  fontSize:'10pt',
                  color:'black',
                  textAlign:'center',
                }}>{item}</td>)}

              </tr>
            }
          </th>
          <th className={`border border-black w-[100px] text-[10pt] pb-1`}>
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