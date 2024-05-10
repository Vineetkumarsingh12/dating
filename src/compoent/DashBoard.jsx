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
import { ImProfile } from "react-icons/im";



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

   console.log(isSmallScreen);

   
       
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
        <div className='pt-14 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 '>
            <div>
                <ImProfile className={`absolute top-10 right-3 bg-white p-1  animate-pulse text-[2.5rem] ${isSmallScreen ? ' md:block':"hidden"} cursor-pointer`} onClick={() => setIsOpen(true)} />
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
        

  <div className='   flex    gap-4 w-full justify-center p-2 min-h-screen'>
    <div className={` ${isSmallScreen ? "hidden":"md:block"} bg-sky-900  rounded `}>
    {navData.map((item, index) => (
                           <Sidebar key={index} item={item} index={index} path={path}/>
                        ))}
                         {
                            <button className='p-3  hover:bg-gray-200 w-full ' onClick={handleLogout}>
                                <div className=' flex items-center'>
                                    <GrLogout />
                                    <p className="ml-2 ">Logout</p>
                                </div>
                            </button>  
                        }
    </div>
    <div className=' w-screen  px-2  md:w-[70%]'>
        <Outlet />
    </div>
    </div>


        </div>
    );
};

export default DashBoard;
