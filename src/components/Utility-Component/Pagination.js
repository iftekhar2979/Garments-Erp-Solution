import react from 'react';
import PropTypes from 'prop-types';
import { UidGenarate } from '../Pages/Dashboard/Orders/View PO/Reducer/intialState';

const Pagination = ({ count, page, handlePage }) => {
    return (
        <>
            <div className="btn-group flex justify-center">

                {[...new Array(count)]?.map((item, index) => {
                    return <button key={UidGenarate()} className={`btn btn-xs ${page === index && 'btn-active'}`} onClick={() => handlePage(index)}>{index + 1}</button>
                })}
            </div>
        </>
    )
};

export default Pagination;