import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminPrivateRoute = ({children}) => {
    const { userInfo } = useSelector((state) => state.user);
    const location=useLocation()
    if(userInfo.data.isAdmin ){
        return children
    }
   
    return  <Navigate to="/dashboard"   state={{from:location}} replace/>;
  };
  export default AdminPrivateRoute;