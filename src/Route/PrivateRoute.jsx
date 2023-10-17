import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation()
     
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoute;