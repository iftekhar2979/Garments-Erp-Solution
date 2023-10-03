import react from 'react';
import { UidGenarate } from '../../Pages/Dashboard/Orders/View PO/Reducer/intialState';

const FilterDropDown = ({companyName,label,handleFilter,propertyName}) => {
    let content
    
    if (companyName) {
        content = companyName?.map((item,i) => {
            return (
                <>
            <a key={UidGenarate()} onClick={()=>handleFilter(item,propertyName)}
                className="py-2 block border-b   font-semibold text-gray-500 hover:bg-slate-300 hover:text-black md:mx-2"
            >{item}</a>
            </>
         ) })
    }
    return (

        <div className="group relative cursor-pointer  py-2 w-44 ml-2 block">
            <div className="flex items-center justify-between hover:bg-gray-200 space-x-5 bg-white px-4">
                <a
                    className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                    
                >
                  {label}
                </a>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </span>
            </div>
            <div
                className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible"

            >
                {content}
            </div>
        </div>

    )
};
export default FilterDropDown;