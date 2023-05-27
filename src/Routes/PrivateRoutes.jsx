import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const loaction = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className='animate-spin rounded-full h-14 w-14 border-b-2 border-[rgb(255,225,57)]'></div>
    );
  }

  return <Navigate to='/login' state={{ form: loaction }} replace></Navigate>;
};

export default PrivateRoutes;
