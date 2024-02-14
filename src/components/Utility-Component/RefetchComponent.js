import react from 'react';
import { IoReload } from 'react-icons/io5';

const RefetchComponent = ({handleRefetch}) => {
    return <>
    <button className="mx-2 p-2 hover:bg-gray-200 hover:rounded-xl" onClick={handleRefetch}>
          <IoReload style={{fontSize:'1.5em' ,color:'green',cursor:'pointer'}}/>
        </button>
    </>
};
export default RefetchComponent;