import React from 'react';
import TableContent from './TableContent';
import TableHeading from './TableHeading';

const Table = ({tableHeadings,tableData,children}) => {
    // console.log(tableData)
    
    return (
   
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4 my-6">
    <table className="w-full text-sm border text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='border '>
               {tableHeadings?.map(heading=><TableHeading key={heading.id} headings={heading.heading}></TableHeading>)}
            </tr>
        </thead>
        <tbody>{
            children
            }
            
            {
                [...tableData]?.reverse().map(item=><TableContent key={item.id} contents={item}></TableContent>)

            }
        </tbody>
       
    </table>
</div>
    );
};

export default Table;