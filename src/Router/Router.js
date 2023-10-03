import { createBrowserRouter } from 'react-router-dom'
import AddCompany from '../components/Pages/Dashboard/AddCompany'
import AddProduct from '../components/Pages/Dashboard/Products/AddProduct'
import Companies from '../components/Pages/Dashboard/Companies'
import Dashboard from '../components/Pages/Dashboard/Dashboard'
import OrderListEdit from '../components/Pages/Dashboard/Edit Sections/OrderListEdit'
import AddOrders from '../components/Pages/Dashboard/Orders/AddOrders'
import SinglePO from '../components/Pages/Dashboard/Orders/View PO/SinglePO'
import ViewOrders from '../components/Pages/Dashboard/Orders/ViewOrders'
import Home from '../components/Pages/Home/Home'
import Login from '../components/Pages/Login/Login'

import Root from '../Root/Root'
import ViewContext from '../components/contextApi/ViewContext'
import DeliveryDetail from '../components/Pages/Dashboard/Orders/View PO/Delivery Detail/DeliveryDetail'
import ToogleTable from '../components/Utility-Component/Table/ToogleTable'
import Chalan from '../components/Pages/Dashboard/Orders/View PO/Chalan/Chalan'
import SingleDetailDelivery from '../components/Pages/Dashboard/Orders/View PO/Delivery Detail/SingleDetailDelivery'
import SignUp from '../components/Pages/Login/SignUp'
import OrderContext from '../components/contextApi/TotalContext'
import ErrorComponent from '../components/Pages/Error/ErrorComponent'
import paramsLoader from '../components/CustomHooks/Functions.js/paramsLoader'
import PrivateRoute from './PrivateRoute'
import TBList from '../components/Pages/Dashboard/TB/TBList'
import TBAndPi from '../components/Pages/Dashboard/TB/TBAndPi'
import ChalanList from '../components/Pages/Dashboard/Chalan List/ChalanList'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
       
        errorElement:<ErrorComponent/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
            , {
                path: '/dashboard/',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard/',
                        element: <AddCompany></AddCompany>
                    }
                    ,
                    {
                        path: '/dashboard/addCompany',
                        element: <AddCompany></AddCompany>
                    }, {
                        path: '/dashboard/addProduct',
                        element: <AddProduct></AddProduct>
                    }, {
                        path: '/dashboard/companies',
                        element: <Companies></Companies>
                    }, {
                        path: '/dashboard/addOrders',
                        element: <AddOrders></AddOrders>,
                       
                    }, {
                        path: '/dashboard/viewOrders',
                        element: <ViewOrders></ViewOrders>
                    }, {
                        path: '/dashboard/edit/:id',
                        element: <OrderListEdit></OrderListEdit>,
                        loader: async ({ params }) => {
                            return fetch(`http://localhost:8000/orderList/${params.id}`)
                        }
                    },
                    , {
                        path: '/dashboard/po/:id',
                        element: <ViewContext><SinglePO></SinglePO></ViewContext>,
                        // loader: async ({ params }) => {
                        //     return fetch(`http://localhost:8000/orderList/${params.id}`)
                        // },
                        
                    },
                    {
                        path: '/dashboard/po/deliveryDetail/:id',
                        element: <ViewContext><DeliveryDetail></DeliveryDetail></ViewContext>,
                        loader: async ({ params }) => {
                            return fetch(`http://localhost:8000/deliveryDetail/${params.id}`)
                        },
                    }, {
                        path: '/dashboard/po/singledeliveryDetail/:id',
                        element: <ViewContext><SingleDetailDelivery /></ViewContext>,
                        loader: async ({ params }) => {
                            return fetch(`http://localhost:8000/singleDeliveryDetail/${params.id}`)
                        }
                    },{
                        path:'/dashboard/tbLists',
                        element:<TBAndPi/>
                    },{
                        path:'/dashboard/Chalans',
                        element:<ChalanList/>
                    }
                ]
            }
        ]
        
    },
    {
        path: '/chalan/:id',
        element: <ViewContext><Chalan></Chalan></ViewContext>,
        loader: async ({ params }) => {
            return fetch(`http://localhost:8000/singleDeliveryDetail/${params.id}`)
        }
    }])