import React from 'react';
import { NavLink } from 'react-router-dom';
const NavbarDropDownList = ({data}) => {
    const {path,name}=data
    // console.log(data)
    return (
        <>
        <li>
            <NavLink
              to={path}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'active bg-indigo-400 text-base-100  px-4'
                  : ''
              }
            >
              {name}
            </NavLink>
          </li>
        </>
    );
};

export default NavbarDropDownList;