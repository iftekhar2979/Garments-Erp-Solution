import React from 'react';

const TableHeading = ({headings}) => {
  return (
    <>
      <th scope='col' class='px-6 py-3'>
        {headings}
      </th>
    </>
  );
};

export default TableHeading;
