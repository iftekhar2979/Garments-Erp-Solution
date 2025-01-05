<<<<<<< HEAD
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
=======
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
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              {name}
            </NavLink>
          </li>
        </>
    );
};

export default NavbarDropDownList;