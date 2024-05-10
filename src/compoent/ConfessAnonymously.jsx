import React, { useEffect } from 'react';
import ConfessCard from './ConfessCard';
import { useState } from 'react';
import { server } from '../constrants/config';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AllUser from './AllUser';

const ConfessAnonymously = () => {
  const [allConfession, setAllConfession] = useState([]);
  const [ownConfession, setOwnConfession] = useState([]);
  const [confession, setConfession] = useState('');

  useEffect(() => {
    const fetchConfessions = async () => {
      const toastId = toast.loading('Loading...');

      try {
        const allConfessionPromise = axios.get(`${server}/api/v1/other/allConfession`, { withCredentials: true });
        const ownConfessionPromise = axios.get(`${server}/api/v1/other/ownConfession`, { withCredentials: true });

        const [allConfessionData, ownConfessionData] = await Promise.all([allConfessionPromise, ownConfessionPromise]);

        console.log(allConfessionData, ownConfessionData);
        setAllConfession(allConfessionData.data.data);
        setOwnConfession(ownConfessionData.data.data);
        toast.success('Data loaded', { id: toastId });
      } catch (err) {
        toast.error('Error occurred', { id: toastId });
        console.log(err);
      } finally {
        toast.dismiss(toastId);
      }
    };
    fetchConfessions();
  }, []);

  return (
    <div className='flex flex-col gap-6 min-h-screen p-4 bg-green-300 rounded'>
      {/* All confessions */}
      <div>
        <h2 className='text-2xl font-bold text-center'>All Confessions</h2>
        {
          allConfession.length>0 &&  <div className=' flex flex-col gap-3 '>
          {allConfession.map((confession, _id) => (
            <ConfessCard key={_id} description={confession.description} />
          ))}
          </div>
        }{
          allConfession.length==0  &&   <div className=' text-center  bg-white rounded '>
                Empty
          </div>
        }
      
      </div>

      {/* Own confessions */}
      <div>
        <h2 className='text-2xl font-bold text-center'>Your Confessions</h2>
        {
          ownConfession.length>0 &&  <div className=' flex flex-col gap-3 '>
          {ownConfession.map((confession, _id) => (
            <ConfessCard key={_id} description={confession.description} />
          ))}
          </div>
        }{
          ownConfession.length==0  &&   <div className=' text-center  bg-white rounded '>
                Empty
          </div>
        }
      
      </div>

      
      <div>
        <h2 className='text-2xl font-bold text-center'>Similar Personalities</h2>
        <AllUser path='similarPersonality' />
      </div>
    </div>
  );
};

export default ConfessAnonymously;
