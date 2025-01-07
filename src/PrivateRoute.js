import React from 'react';
import { Navigate } from 'react-router-dom';
import { getLocalStorage } from './utils/session'; 

const PrivateRoute = ({ children }) => {
  const token = getLocalStorage('jwtToken'); 

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
