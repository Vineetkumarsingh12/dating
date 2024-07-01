import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../assesst/logo.png"
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:640px)');
    const isUser= useSelector(state => state.auth.user);
    console.log(isSmallScreen);
    return (
        <div className='  fixed   w-full bg-transparent bg-gray-400  z-40  backdrop-blur-lg  border-gray-900 border-b-2  '>
            <MdMenuOpen   
 className={`${isSmallScreen? "":'sm:hidden'}  bg-white m-1 text-[2rem]`} onClick={() => setIsOpen(true)} />
            <Drawer open={isOpen && isSmallScreen} onClose={() => setIsOpen(false)}>
                {/* Content inside the Drawer */}
                <div style={{ width: '200px' }}  className=' flex flex-col gap-3  p-3'>
            
              
                {/* <div className='text-2xl font-bold'>Logo</div> */}
                <Link to="/" className=''>
  <img src={logo} alt="logo" className='w-28 pt-1' />
</Link>

                   
                    <Link to="/about" className=' cursor-pointer'>About</Link>
                    <Link to="/contact"className=' cursor-pointer' >Contact</Link>
                  {/* login ,signup, signout */}
                    {
                        !isUser && <Link to="/login" className=''>Login</Link>
                    }
                 
                    {
                        isUser && <div className=''>{isUser.username} </div>
                    
                    }
                    
                
                </div>
               
            </Drawer>

            <div className='sm:flex hidden justify-between px-2 items-center  '>
            <Link to="/" className=''>
            <img src={logo} alt="logo" className=' w-28 bg-white p-2' />
            </Link>
                <div className='flex gap-3 items-center'>
                    
                    <Link to="/about" className='  cursor-pointer'>About</Link>
                    <Link to="/contact" className='cursor-pointer'>Contact</Link>
                    <div className=' bg-white rounded p-1'>
                  {/* login ,signup, signout */}
                    {
                        !isUser && <Link to="/login" className=''>Login</Link>
                    }
                 
                    {
                        isUser && <div className=' flex items-center gap-1'>
                            <img src={isUser.avatar.url} alt="profile" className='w-8 h-8 rounded-full object-cover border border-black' />
                            <p>{isUser.username}</p> 
                            </div>
                    
                    }
                    </div>
                    
                
                </div>
          </div>
        </div>
    );
};

export default Navbar;
