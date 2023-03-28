import React from 'react';

const TableHeading = ({headings}) => {
  return (
    <>
      <th scope='col' className=' py-2 px-4 border'>
        {headings}
      </th>
    </>
  );
};

export default TableHeading;
