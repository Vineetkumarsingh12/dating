import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const user =  useSelector(state => state.auth.user);

  console.log("protedd",user);
  
  if (!user) {
    return navigate("/login");
  }


  return <Component />;
}

export default ProtectedRoute;
