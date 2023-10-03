import React from 'react';

const TableHeading = ({headings ,className}) => {
  return (
    <>
      <th scope='col' className={` py-2  border ${className}`}>
        {headings}
      </th>
    </>
  );
};

export default TableHeading;
