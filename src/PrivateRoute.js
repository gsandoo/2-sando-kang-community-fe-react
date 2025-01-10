import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getLocalStorage } from './utils/session';

const PrivateRoute = ({ children }) => {
  const token = getLocalStorage('jwtToken');

  if (!token) {
    console.log('Redirecting to login');
    return <Navigate to="/login" replace />;
  }

  console.log('Rendering protected content');
  return children;
};


export default PrivateRoute;
