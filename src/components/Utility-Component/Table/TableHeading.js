import React from 'react';

<<<<<<< HEAD
const TableHeading = ({headings ,className}) => {
  return (
    <>
      <th scope='col' className={` py-2  border ${className}`}>
=======
const TableHeading = ({headings}) => {
  return (
    <>
      <th scope='col' className=' py-2 px-4 border'>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
        {headings}
      </th>
    </>
  );
};

export default TableHeading;
