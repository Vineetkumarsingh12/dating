import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
const token= Cookies.get('rocket-token');
console.log("token*************", token);

  console.log("protected", user);
  
  useEffect(() => {
    if (!user) {
      navigate("/login"); 
    }
  }, [user, navigate]);

  return user ? <Component /> : null;
}

export default ProtectedRoute;
