import React from 'react';

const TableHeading = ({headings}) => {
  return (
    <>
      <th scope='col' class=' py-2 border'>
        {headings}
      </th>
    </>
  );
};

export default TableHeading;
