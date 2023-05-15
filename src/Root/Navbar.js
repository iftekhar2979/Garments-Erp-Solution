import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-md'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52'
          >
            <li>
              <a className='justify-between'>HOME</a>
            </li>
            <li>
              <NavLink to=''>DASHBOARD</NavLink>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>ERP-SOLUTIONS</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li tabIndex={0}>
          <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active bg-indigo-400 text-base-100' : ''
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dashboard'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active bg-indigo-400 text-base-100' : ''
              }
            >
              DASHBOARD
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link className='btn' to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
