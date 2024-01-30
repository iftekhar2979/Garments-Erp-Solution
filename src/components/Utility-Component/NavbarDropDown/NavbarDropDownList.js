import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const NavbarDropDownList = ({data}) => {
    const {path,name,logo}=data

    
    return (
        <>
        <li className=''>
            <NavLink
              to={path}  
            >
          <img src={logo} className='w-4 inline ' alt="" />
              {name}
            </NavLink>
          </li>
        </>
    );
};

export default NavbarDropDownList;