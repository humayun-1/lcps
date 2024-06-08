import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ roles, children }) => {
  const userString = localStorage.getItem('data');
  const userData = JSON.parse(userString);

  // if (!userString || !userData.isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  const authorized = roles.some(role => userData?.role?.includes(role));

  return authorized ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;