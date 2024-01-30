import react from 'react';
import { useDispatch } from 'react-redux';

const usePaginationNextAndPrev = ({ filterName,PageChanging, incrementFirstPage, lastPageIncrement, decrementFirstPage, lastPageDecrement, page, count,firstPage,lastPage }) => {
    const dispatch = useDispatch()
    const handleNext = () => {
        if (page === count) {
            dispatch(PageChanging(page))
            return
        }
        if (lastPage === count) {
            dispatch(PageChanging(page + 1))
            return
        }
        dispatch(PageChanging(page + 1))
        dispatch(incrementFirstPage(filterName))
        dispatch(lastPageIncrement(filterName))
    }
    const handlePrev = () => {
        if (page === 0) {
            dispatch(PageChanging(page))
            return
        }
        if (firstPage === 0) {
            dispatch(PageChanging(page - 1))
            return
        }
        dispatch(PageChanging(page - 1))
        dispatch(decrementFirstPage(filterName))
        dispatch(lastPageDecrement(filterName))
    }
    return { handleNext, handlePrev }
};
export default usePaginationNextAndPrev;