import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarDropDown from '../../Utility-Component/NavbarDropDown/NavbarDropDown';
<<<<<<< HEAD
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';
const Dashboard = () => {
  useDocumentTitle('DASHBOARD--ADD COMPANY')
=======
const Dashboard = () => {
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
 const company= [
    {
      id: 20,
      path: '/dashboard/addCompany',
<<<<<<< HEAD
      name: 'Add',
      parent: 'COMPANY',
      logo:'https://icons.veryicon.com/png/o/business/leasing-cloud/icon-company-information-maintenance-1.png'

=======
      name: 'ADD COMPANY',
      parent: 'COMPANY',
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    },
    {
      id: 25,
      path: '/dashboard/addProduct',
<<<<<<< HEAD
      name: 'Products',
      parent: 'COMPANY',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/fu-jia-intranet/product-29.png'
=======
      name: 'ADD PRODUCTS',
      parent: 'COMPANY',
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    },
    {
      id: 30,
      path: '/dashboard/companies',
<<<<<<< HEAD
      name: 'Companies',
      parent: 'COMPANY',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/commercial-space-leasing/company-48.png'
    },
    {
      id: 31,
      path: '/dashboard/employes',
      name: 'Employes',
      parent: 'COMPANY',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/classic-car-maintenance-dsm/employee-list-1.png'
=======
      name: 'COMPANIES',
      parent: 'COMPANY',
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    },
  ]
const orders=[
    {
      id: 35,
      path: '/dashboard/addOrders',
<<<<<<< HEAD
      name: 'Add',
      parent: 'ORDERS',
      logo:'https://icons.veryicon.com/png/o/business/operation-and-maintenance-platform/create-work-order.png'
=======
      name: 'ADD ORDERS',
      parent: 'ORDERS',
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    },
    {
      id: 40,
      path: '/dashboard/viewOrders',
<<<<<<< HEAD
      name: 'Orders',
      parent: 'ORDERS',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/905-system/work-order-6.png'
    },
    {
      id:48,
      path:'/dashboard/Chalans',
      name:"Chalan's",
      parent: 'ORDERS',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/staff-360/pdf-36.png'
    },
    {
      id:45,
      path:'/dashboard/tbLists',
      name:'TB List',
      parent: 'ORDERS',
      logo:'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/order-512.png'
    },
 
    {
      id:49,
      path:'/dashboard/piList',
      name:"PI LIST",
      parent: 'ORDERS',
      logo:'https://static.vecteezy.com/system/resources/previews/019/006/957/original/invoice-flat-icons-png.png'
    }
=======
      name: 'VIEW PRODUCTS',
      parent: 'ORDERS',
    },
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
  ]



  return (
<<<<<<< HEAD
    <div className='drawer drawer-mobile bg-wholebg'>
=======
    <div className='drawer drawer-mobile'>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content '>
        <label
          htmlFor='my-drawer-2'
<<<<<<< HEAD
          className=' bg-gray-300  absolute absolute top-6 right-[150px] '
=======
          className=' bg-gray-300 lg:hidden absolute absolute top-6 right-[150px] '
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
        > 
        </label>
        <Outlet></Outlet>
      </div>
<<<<<<< HEAD
      <div className='drawer-side border-r '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4  lg:w-full text-base-content '>

          <NavbarDropDown name={'Company'} data={company} />
          <NavbarDropDown name={'Orders'} data={orders}/>
=======
      <div className='drawer-side '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 md:w-1/3 bg-gray-200  text-base-content'>
          <NavbarDropDown name={'Company'} data={company} />
          <NavbarDropDown name={'Orders'} data={orders}/>

          <li>
            <a>Sidebar Item 2</a>
          </li>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
