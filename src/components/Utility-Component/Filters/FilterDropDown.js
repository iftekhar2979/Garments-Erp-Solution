import react from 'react';
import { UidGenarate } from '../../Pages/Dashboard/Orders/View PO/Reducer/intialState';

import { useSelector } from 'react-redux';

const FilterDropDown = ({ companyName, label, handleFilter, propertyName }) => {
    const { orderFiltering: { filteredState = '' } } = useSelector(state => state.orderListFilter)
    let content
    function findTheItemAndPropery(value) {
        if (value === '') {
            return ''
        }
        const firstWord = value.indexOf('?')
        const lastWord = value.indexOf('=')
        const property = value.slice(firstWord + 1, lastWord)
        const itemName = value.slice(lastWord + 1, value.length)
        return { property, itemName }
    }
    const { itemName, property } = findTheItemAndPropery(filteredState)
  
    function labelFinding(property) {
        switch (property) {
            case 'productName':
                property = 'Product'
                break;
            case 'status':
                property = 'Status'
                break
            case 'companyName':
                property = 'Company'
                break
            case 'buyerName':
                property = 'Buyers'
                break
            case 'season':
                property = 'Season'
                break
        }
        if (label === property) {
            let activeClass = "flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-red-300 text-white"
            return { label: itemName, activeClass: activeClass }
        } else {
            let inActiveClass = "flex items-center justify-between hover:bg-gray-200 space-x-5 bg-white  "
            return { label, activeClass: inActiveClass }
        }
    }
    let {label:labelName,activeClass}=labelFinding(property)

    if (companyName) {
        content = companyName?.map((item, i) => {
            return (
                <>
                    <a key={UidGenarate()} onClick={() => handleFilter(item, propertyName)}
                        className=" block border-b font-semibold text-gray-500 hover:bg-slate-300 hover:text-black md:mx-2"
                    >{item}</a>
                </>
            )
        })
    }
    return (
        <div className="group relative cursor-pointer  p-2 w-36  block">
            <div className={activeClass}>
                <a
                    className="flex items-center font-bold justify-between p-2 space-x-5"
                >
                    {labelName}
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