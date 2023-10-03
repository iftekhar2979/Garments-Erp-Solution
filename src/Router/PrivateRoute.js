import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../components/contextApi/UserContext';
import Spinner from '../components/Utility-Component/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
  
    if(loading){
        return <Spinner/>
    }
    if(user && user.uid ){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;