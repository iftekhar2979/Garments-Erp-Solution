import React from 'react';

const SizeTable = ({options,sizes,setSizes,sizeChange}) => {
 
    return (
       <>
  <table className=''>
    {/* head */}
  
    <tbody>
      {/* row 1 */}
      {options?.map((singleSize,i)=>{
        return (
            <tr  key={i}>
            <td >{singleSize}</td>
            <td ><input type="text" className='border w-16' name={singleSize} defaultValue={0} onChange={sizeChange}/></td>
          </tr>
        )
      })}
     
      {/* <tr >
        <td>SM</td>
        <td ><input type="text" className='border'/></td>
      </tr>
      <tr >
        <td>M</td>
        <td ><input type="text" className='border'/></td>
      </tr>
      <tr >
        <td>L</td>
        <td ><input type="text" className='border'/></td>
      </tr>
      <tr >
        <td>XL</td>
        <td ><input type="text" className='border'/></td>
      </tr>
      <tr >
        <td>XXL</td>
        <td ><input type="text" className='border'/></td>
      </tr>
      <tr >
        <td>XXXL</td>
        <td ><input type="text" className='border'/></td>
      </tr> */}
      {/* row 2 */}
     
    </tbody>
  </table>
  </>
    );
};

export default SizeTable;