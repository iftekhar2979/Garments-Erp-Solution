import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import NavbarDropDownList from '../../Utility-Component/NavbarDropDown/NavbarDropDownList';
const NavbarDropDown = ({ name, data }) => {
  const [dropdown, setDropdown] = useState(false);
  // console.log(dropdown);
  return (
    <>
      <div className='dropdown dropdown-open'>
        <li>
          <button
            type='button'
            className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
            aria-controls={`dropdown-${name}`}
            onClick={() => setDropdown(!dropdown)}
          >
         
            <span className='flex-1 text-left whitespace-nowrap'>
              {name}
            </span>
            <HiChevronDown></HiChevronDown>
          </button>
          {dropdown && (
            <>
              <ul className='text-base font-normal'>
                {data?.map((item) => {
                  return (
                    <NavbarDropDownList
                      data={item}
                      key={item.id}
                    ></NavbarDropDownList>
                  );
                })}
              </ul>
            </>
          )}
        </li>
      </div>
    </>
  );
};

export default NavbarDropDown;
