import { HiChevronDown } from 'react-icons/hi';
import NavbarDropDownList from './NavbarDropDownList';
const NavbarDropDown = ({ name, data }) => {
  return (
    <>
      <div className='dropdown dropdown-open'>
        <li>
          <button
            type='button'
            className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
            aria-controls={`dropdown-${name}`}
            data-collapse-toggle={`dropdown-${name}`}
          >
            <span
              className='flex-1 ml-3 text-left whitespace-nowrap'
              sidebar-toggle-item="true"
            >
              {name}
            </span>
            <HiChevronDown></HiChevronDown>
          </button>
          <ul
            id={`dropdown-${name}`}
            className='hidden text-base font-normal py-2 bg-gray-100 space-y-2'
          >
            {data?.map((item) => (
              <NavbarDropDownList
                data={item}
                key={item.id}
              ></NavbarDropDownList>
            ))}
          </ul>
        </li>
      </div>
    </>
  );
};

export default NavbarDropDown;
