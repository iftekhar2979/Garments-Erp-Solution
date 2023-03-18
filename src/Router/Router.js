import { createBrowserRouter } from 'react-router-dom'
import AddCompany from '../components/Pages/Dashboard/AddCompany'
import AddProduct from '../components/Pages/Dashboard/AddProduct'
import Companies from '../components/Pages/Dashboard/Companies'
import Dashboard from '../components/Pages/Dashboard/Dashboard'
import AddOrders from '../components/Pages/Dashboard/Orders/AddOrders'
import ViewOrders from '../components/Pages/Dashboard/Orders/ViewOrders'
import Home from '../components/Pages/Home/Home'
import Root from '../Root/Root'
export const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },{
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:'/dashboard/addCompany',
                    element:<AddCompany></AddCompany>
                },{
                    path:'/dashboard/addProduct',
                    element:<AddProduct></AddProduct>
                },{
                    path:'/dashboard/companies',
                    element:<Companies></Companies>
                },{
                    path:'/dashboard/addOrders',
                    element:<AddOrders></AddOrders>
                },{
                    path:'/dashboard/viewOrders',
                    element:<ViewOrders></ViewOrders>
                }
            ]
        }
    ]
  }])