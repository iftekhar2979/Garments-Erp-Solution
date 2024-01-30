import react, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { UidGenarate } from '../Pages/Dashboard/Orders/View PO/Reducer/intialState';

const Pagination = ({ count, handlePage, firstPage, lastPage, handleNext, handlePrev, filterObjectPropertyForPagination }) => {


    const { pageState = 0, filteredPageNumber = 0, searchPageNumber = 0, isSearched = false, isFiltered = false } = filterObjectPropertyForPagination


    let content
    if (!isSearched && !isFiltered) {
        content = pageState
    }

    if (isSearched) {
        content = searchPageNumber
    }
    if (isFiltered) {
        content = filteredPageNumber
    }
    let val = [...new Array(count)]

    const modifiedArray = val.map((value, index) => {
        // Replace undefined with index + 1
        return value === undefined ? index : value;
    });
    


    return (
        <>
            <div className="btn-group flex justify-center">
                {count >= 7 && <button key={UidGenarate()} className={`btn btn-xs `} onClick={handlePrev}>Prev</button>}
                {modifiedArray.slice(firstPage, lastPage)?.map((item, index) => {
                    return <button key={UidGenarate()} className={`btn btn-xs ${content === item && 'btn-active'}`} onClick={() => handlePage(item)}>{item + 1}</button>
                })}
                {count >= 7 && <button key={UidGenarate()} className={`btn btn-xs `} onClick={handleNext}>Next</button>}
            </div>
        </>
    )
};

export default Pagination;