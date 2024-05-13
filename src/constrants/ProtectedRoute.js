import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import  { useState } from 'react';


const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const [rocketToken, setRocketToken] = useState("");

  useEffect(() => {

      const rocketTokenCookie = document.cookie
          .split('; ')
          .find(row => row.startsWith('rocket token='));
console.log("rocketTokenCookie",rocketTokenCookie);
      if (rocketTokenCookie) {
          const tokenValue = rocketTokenCookie.split('=')[1];
          setRocketToken(tokenValue);
          console.log("value*****",tokenValue);
      }
  }, []);

  console.log("protected", user);
  
  useEffect(() => {
    if (!user) {
      navigate("/login"); 
    }
  }, [user, navigate]);

  return user ? <Component /> : null;
}

export default ProtectedRoute;
