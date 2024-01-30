import react from 'react';

const FilterAllButton = ({label,className,handleAll}) => {
    return (
        <button className={className} onClick={handleAll}> {label}</button>
    )
};
export default FilterAllButton;