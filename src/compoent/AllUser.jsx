import React, { useEffect } from 'react';
import { useState } from 'react';
import { server } from '../constrants/config';
import axios from 'axios';
import AllCard from './AllCard';

const AllUser = ({ path = "allUser" }) => {
    const [allUser, setAllUser] = useState([]);
   

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${server}/api/v1/other/${path}`, { withCredentials: true });
                console.log("178739",response);
               
                setAllUser(response.data.data);
            
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className='flex flex-col items-center gap-3  w-full bg-sky-900 rounded p-4'>
            {
 path=="allUser" &&   <h2 className='text-2xl font-bold text-center'>All Users</h2>
        }
          
          
            <div className=' flex flex-wrap justify-center gap-6'>
                {allUser.map((user, index) => (
                    <AllCard key={index} user={path=='allUser'?user:user.user} />
                ))}
                {
                 allUser.length==0 &&   <p className='bg-white p-3 rounded font-bold'>Empty</p>
                }
            </div>
        </div>
    );
};

export default AllUser;
