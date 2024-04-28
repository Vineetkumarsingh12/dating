import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const user =  useSelector(state => state.auth.user);


  
  if (!user) {
    navigate("/login");
    return null;
  }


  return <Component />;
}

export default ProtectedRoute;
