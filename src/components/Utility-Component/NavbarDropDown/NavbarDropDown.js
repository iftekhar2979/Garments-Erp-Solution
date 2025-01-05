import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import NavbarDropDownList from '../../Utility-Component/NavbarDropDown/NavbarDropDownList';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
const NavbarDropDown = ({ name, data }) => {
  const [dropdown, setDropdown] = useState(false);
  const {userInfo:{data:{isAdmin}}}=useSelector(state=>state.user)
  let filteredIds
  if(!isAdmin){
    let routesId=[45,49]
     filteredIds=data.filter(item=>!routesId.includes(item.id))
   
  }else{
    filteredIds=data
  }

=======
const NavbarDropDown = ({ name, data }) => {
  const [dropdown, setDropdown] = useState(false);
  // console.log(dropdown);
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
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
<<<<<<< HEAD
         
            <span className='flex-1 text-left whitespace-nowrap'>
=======
            <span className='flex-1 ml-3 text-left whitespace-nowrap'>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              {name}
            </span>
            <HiChevronDown></HiChevronDown>
          </button>
          {dropdown && (
            <>
<<<<<<< HEAD
              <ul className='text-base font-normal'>
                {filteredIds?.map((item) => {
=======
              <ul className='text-base font-normal py-2 bg-gray-100 space-y-2'>
                {data?.map((item) => {
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
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
