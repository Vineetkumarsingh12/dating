import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NotFound = () => {
  console.log("Not found page");
  return (
    <div className='min-h-screen flex bg-green-400 w-screen'>
      <div className='w-full flex justify-center items-center' style={{
        backgroundImage: `url(https://demos.codexcoder.com/themeforest/html/ollya/assets/images/login/404.jpg)`,
      }}>
        <Link to="/" className='block text-2xl font-bold text-center p-4 text-white bg-black rounded'>Go to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
