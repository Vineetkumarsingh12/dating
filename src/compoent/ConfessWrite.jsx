import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {server} from '../constrants/config';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';


const ConfessWrite = () => {

    //id from params
    const {id}= useParams();
    const navigate=useNavigate();
    const [data, setData]=useState("");
    console.log(data);
    const onSubmit= async()=>{
        const toastId = toast.loading('Loading...');
        try{
            const confess=await axios.post(`${server}/api/v1/other/confess`, {description:data, confessTo:id}, {withCredentials: true});
            console.log(confess);
            navigate('/dashboard');
            toast.success('Confession submitted', { id: toastId, duration: 2000});
        }catch(err){
            toast.error('Error occured', { id: toastId, duration: 2000});
            console.log(err);
        }
    }
  return (
    <div className=' flex flex-col gap-2 min-h-screen'>

  <p className='text-center p-3 font-bold text-cyan-300 text-2xl'> confess </p>      
      < textarea className='    h-40 border-2 border-gray-300 p-2' placeholder='Write your confession here...'  value={data} onChange={
            (e)=>setData(e.target.value)
      }/>

        <button className='bg-cyan-700 text-white p-2 rounded mt-2 w-fit'  onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default ConfessWrite
