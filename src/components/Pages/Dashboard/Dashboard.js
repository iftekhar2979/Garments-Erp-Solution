import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarDropDown from '../../Utility-Component/NavbarDropDown/NavbarDropDown';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';
const Dashboard = () => {
  useDocumentTitle('DASHBOARD--ADD COMPANY')
 const company= [
    {
      id: 20,
      path: '/dashboard/addCompany',
      name: 'Add',
      parent: 'COMPANY',
      logo:'https://icons.veryicon.com/png/o/business/leasing-cloud/icon-company-information-maintenance-1.png'

    },
    {
      id: 25,
      path: '/dashboard/addProduct',
      name: 'Products',
      parent: 'COMPANY',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/fu-jia-intranet/product-29.png'
    },
    {
      id: 30,
      path: '/dashboard/companies',
      name: 'Companies',
      parent: 'COMPANY',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/commercial-space-leasing/company-48.png'
    },
    {
      id: 31,
      path: '/dashboard/addEmployes',
      name: 'Employes',
      parent: 'COMPANY',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/classic-car-maintenance-dsm/employee-list-1.png'
    },
  ]
const orders=[
    {
      id: 35,
      path: '/dashboard/addOrders',
      name: 'Add',
      parent: 'ORDERS',
      logo:'https://icons.veryicon.com/png/o/business/operation-and-maintenance-platform/create-work-order.png'
    },
    {
      id: 40,
      path: '/dashboard/viewOrders',
      name: 'Orders',
      parent: 'ORDERS',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/905-system/work-order-6.png'
    },
    {
      id:45,
      path:'/dashboard/tbLists',
      name:'TB List',
      parent: 'ORDERS',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/staff-360/pdf-36.png'
    },
    {
      id:48,
      path:'/dashboard/Chalans',
      name:"Chalan's",
      parent: 'ORDERS',
      logo:'https://icons.veryicon.com/png/o/miscellaneous/staff-360/pdf-36.png'
    }
  ]



  return (
    <div className='drawer drawer-mobile bg-wholebg'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content '>
        <label
          htmlFor='my-drawer-2'
          className=' bg-gray-300 lg:hidden absolute absolute top-6 right-[150px] '
        > 
        </label>
        <Outlet></Outlet>
      </div>
      <div className='drawer-side border-r '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4  lg:w-full text-base-content'>
          <NavbarDropDown name={'Company'} data={company} />
          <NavbarDropDown name={'Orders'} data={orders}/>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
