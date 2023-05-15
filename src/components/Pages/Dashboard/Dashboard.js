import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarDropDown from '../../Utility-Component/NavbarDropDown/NavbarDropDown';
const Dashboard = () => {
 const company= [
    {
      id: 20,
      path: '/dashboard/addCompany',
      name: 'ADD COMPANY',
      parent: 'COMPANY',
    },
    {
      id: 25,
      path: '/dashboard/addProduct',
      name: 'ADD PRODUCTS',
      parent: 'COMPANY',
    },
    {
      id: 30,
      path: '/dashboard/companies',
      name: 'COMPANIES',
      parent: 'COMPANY',
    },
  ]
const orders=[
    {
      id: 35,
      path: '/dashboard/addOrders',
      name: 'ADD ORDERS',
      parent: 'ORDERS',
    },
    {
      id: 40,
      path: '/dashboard/viewOrders',
      name: 'VIEW ORDERS',
      parent: 'ORDERS',
    },
    {
      id:45,
      path:'/dashboard/chalanNumbers',
      name:'TOTAL CHALAN-S',
      parent: 'ORDERS',
    }
  ]



  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content '>
        <label
          htmlFor='my-drawer-2'
          className=' bg-gray-300 lg:hidden absolute absolute top-6 right-[150px] '
        > 
        </label>
        <Outlet></Outlet>
      </div>
      <div className='drawer-side '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 md:w-1/3 bg-gray-200  text-base-content'>
          <NavbarDropDown name={'Company'} data={company} />
          <NavbarDropDown name={'Orders'} data={orders}/>

          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
