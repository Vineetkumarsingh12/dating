import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:640px)');
    const isUser= useSelector(state => state.auth.user);
    console.log(isSmallScreen);
    return (
        <div className=' p-1 fixed w-full'>
            <CiMenuBurger className={isSmallScreen? "":'sm:hidden'} onClick={() => setIsOpen(true)} />
            <Drawer open={isOpen && isSmallScreen} onClose={() => setIsOpen(false)}>
                {/* Content inside the Drawer */}
                <div style={{ width: '250px' }}>vineet</div>
            </Drawer>

            <div className='sm:flex hidden justify-between p-2 items-center'>
                <div className='text-2xl font-bold'>Logo</div>
                <div className='flex gap-3'>
                    <div className=''>Home</div>
                    <div className=''>About</div>
                    <div className=''>Contact</div>
                  {/* login ,signup, signout */}
                    {
                        !isUser && <Link to="/login" className=''>Login</Link>
                    }
                 
                    {
                        isUser && <div className=''>{isUser.username} </div>
                    
                    }
                    
                
                </div>
          </div>
        </div>
    );
};

export default Navbar;
