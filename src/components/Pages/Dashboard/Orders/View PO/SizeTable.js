import React from 'react';

const SizeTable = ({ options, size, sizeChange, defaultValue,total }) => {

  return (
    <>
      <table className=''>
        <tbody>
          {options?.map((singleSize, i) => {
          
            return (
              <tr key={i}>
                <td>{singleSize}</td>
                <td>
                  <input
                    type='text'
                    className='border w-20'
                    name={singleSize}
                    onChange={sizeChange}
                  />
                </td>
              </tr>
            );
          })}
          <tr>
          <td >Total : </td>
            <td className="font-bold"> {isNaN(total) ? 0 : total}</td>
            
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SizeTable;
