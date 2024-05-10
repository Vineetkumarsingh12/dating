import React from 'react'
import {personalityQuestions} from '../assesst/data';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {server} from '../constrants/config';

const SingleUser = () => {

    const {id} = useParams();
    const [user, setUser] = useState({});
    
    useEffect(() => {   
        const fectch=async()=>{
            const response= await axios.get(`${server}/api/v1/other/singleUser/${id}`, {withCredentials: true});
           
            setUser(response.data.data);
          
        }
        fectch(); 

      }, []);

   
  return (
    <div  className=' min-h-screen bg-blue-200 p-3 h-fit flex flex-col gap-5 rounded'>
        <div className=' bg-sky-900  flex flex-wrap justify-center items-center gap-5 p-3 rounded '>
        <img src={user?.avatar?.url} alt="profile" className=" rounded-full    h-96" />
        <div className="bg-white shadow-md rounded-md p-4">
  <p className="text-sm font-semibold">Name: {user?.name}</p>
  <p className="text-sm">Username: {user?.username}</p>
  <p className="text-sm">Email: {user?.email}</p>
  <p className="text-sm">Bio: {user?.bio}</p>
  <p className="text-sm">Gender: {user?.gender}</p>
  <p className="text-sm">Education Qualification: {user?.educationQualification}</p>
</div>

        </div>
        <div className='bg-sky-900 rounded-md text-white p-[2rem] font-thin text-[1.3rem]'>
          {
           user?.personality && personalityQuestions.map((question, index) => (
              <div key={index} className='flex  gap-2'>
                <label htmlFor={question.id}>{question.question}</label>
                <input
                  type="range"
                  id={question.id}
                  min="1"
                  max="10"
                  value={user.personality[question.id]}
                  className='ml-[2rem] text-white  outline-transparent'
                />
              </div>
            ))
          }

            </div>

    </div>
  )
}

export default SingleUser
