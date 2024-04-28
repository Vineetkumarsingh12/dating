import React from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { navData } from '../assesst/data';
import Sidebar from './Sidebar';
import { server } from '../constrants/config';
import {userNotExists} from '../reduxslice/auth';
import { useDispatch } from 'react-redux';



import axios from 'axios';
import { toast } from 'react-hot-toast';
import { GrLogout } from 'react-icons/gr';

const DashBoard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const path = location.pathname;
    const [isOpen, setIsOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:640px)');
   

   
       
        const handleLogout = async() => {
            const toastId = toast.loading("Logging Out...");
            try {
                await axios.get(`${server}/api/v1/user/logout`,{
                    withCredentials:true,
                });
                dispatch(userNotExists());
                toast.success("Logged Out Successfully", { id: toastId });
                localStorage.removeItem("rocket-data");

                navigate("/");
            } catch (error) {
                console.log(error);
                toast.error("Failed to Logout");
            } finally {
              toast.dismiss(toastId);
                
            }
    };

    return (
        <div className='h-full '>
            <div>
                <FaArrowCircleLeft className={`absolute top-1/2 transform -translate-y-1/2 right-0 animate-pulse text-[2rem] ${isSmallScreen ? ' md:block':"hidden"} cursor-pointer`} onClick={() => setIsOpen(true)} />
                <Drawer open={isOpen && isSmallScreen} anchor="right" onClose={() => setIsOpen(false)}>
                    <div style={{ width: '250px' }}>
                        {navData.map((item, index) => (
 <Sidebar key={index} item={item} index={index} path={path} />
                        ))}
                        {
                            <button className='p-3 hover:bg-gray-200' onClick={handleLogout}>
                                <div className=' flex items-center'>
                                    <GrLogout />
                                    <p className="ml-2">Logout</p>
                                </div>
                            </button>  
                        }
                    </div>
                </Drawer>


            </div>
        

  <div className='   h-screen flex  items-center '>
    <div className=' max-w-[20%]'>
    {navData.map((item, index) => (
                           <Sidebar key={index} item={item} index={index} />
                        ))}
                         {
                            <button className='p-3 hover:bg-gray-200' onClick={handleLogout}>
                                <div className=' flex items-center'>
                                    <GrLogout />
                                    <p className="ml-2">Logout</p>
                                </div>
                            </button>  
                        }
    </div>
    <div className=' w-[70%]'>
        <Outlet />
    </div>
    </div>


        </div>
    );
};

export default DashBoard;
