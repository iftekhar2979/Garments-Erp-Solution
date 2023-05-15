import React from 'react';

const TableHeading = ({headings}) => {
  return (
    <>
      <th scope='col' className=' py-2 pl-2 border'>
        {headings}
      </th>
    </>
  );
};

export default TableHeading;
