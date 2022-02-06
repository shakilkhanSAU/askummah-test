import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const { user } = useAuth();
    if (user.email) {
        return children
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;