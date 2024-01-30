import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../components/contextApi/UserContext';
import Spinner from '../components/Utility-Component/Spinner';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
    const {user,isLoading,loading}=useContext(AuthContext)
    const { userInfo } = useSelector((state) => state.user);
    const location=useLocation()
    if(loading){
        return <Spinner/>
    }
    if( userInfo && userInfo?.data?.email ){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default PrivateRoute;