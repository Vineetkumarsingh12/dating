import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { personalityQuestions } from '../assesst/data';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { server } from '../constrants/config';
;

const Profile = () => {
  const user = useSelector(state => state.auth.user);
  const [personality, setPersonality] = useState({}); // State to store personality values
    const personalityId=user.personality?._id;

    useEffect(()=>{
        const fetchPersonality=async()=>{
            const toastId = toast.loading("Fetching Personality...");
            try {
                const response = await axios.get(`${server}/api/v1/other/personality/${personalityId}`, {
                    withCredentials: true
                });
                console.log(response);
                toast.success("Personality Fetched Successfully", { id: toastId });
                setPersonality(response.data.data);
            } catch (error) {
                console.log(error);
                toast.error("Failed to Fetch Personality", { id: toastId });
            } finally {
                toast.dismiss(toastId);
            }
        }
        fetchPersonality();
    },[personalityId]);
   

  const onSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Updating Personality...");
    try {
      const response = await axios.post(`${server}/api/v1/other/updatePersonality`,
        personality,{
        withCredentials: true
      });
    console.log(response);
    toast.success("Personality Updated Successfully", { id: toastId });
    setPersonality(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to Update Personality", { id: toastId });
    } finally {
      toast.dismiss(toastId);
    }
  }


  const handleRangeChange = (e, id) => {
    const updatedPersonality = { ...personality, [id]: parseInt(e.target.value) };
    setPersonality(updatedPersonality);
  }

  return (
    <div className=' bg-blue-200 p-3 h-fit flex flex-col gap-5'>
      <div className=' bg-sky-900  flex flex-wrap justify-center items-center gap-5 p-3 '>

      <div>
          <img src={user?.avatar?.url} alt="profile" className="w-32 h-32 rounded-full" />
        </div>
        <div className='flex flex-col'>
  <div className="mb-4">
    <label htmlFor="name" className="mr-1 text-white">Name:</label>
    <input type="text" id="name" placeholder="Name" value={user?.name} readOnly className="border rounded-md p-2" />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className=" mr-1 text-white">Email:</label>
    <input type="email" id="email" placeholder="Email" value={user?.email} readOnly className="border rounded-md p-2  w-full" />
  </div>
  <div className="mb-4">
    <label htmlFor="gender" className="text-white mr-1">Gender:</label>
    <input type="text" id="gender" placeholder="Gender" value={user.gender} readOnly className="border rounded-md p-2" />
  </div>
  <div className="mb-4">
    <label htmlFor="educationQualification" className=" text-white mr-1">Education Qualification:</label>
    <input type="text" id="educationQualification" placeholder="Education Qualification" value={user.educationQualification} readOnly className="border rounded-md p-2" />
  </div>
  <div className="mb-4">
    <label htmlFor="bio" className="text-white mr-1">Bio:</label>
    <textarea id="bio" placeholder="Bio" value={user?.bio} readOnly className="border rounded-md p-2" />
  </div>
</div>

        {/* image */}
      
      </div>

      <div className='bg-sky-900 rounded-md text-white p-[2rem] font-thin text-[1.3rem]'>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
          {personalityQuestions.map((question, index) => (
            <div key={index}>
              <label htmlFor={question.id}>{question.question} </label>
              <input
                type="range"
                id={question.id}
                min="1"
                max="10"
                value={personality[question.id]}
                onChange={(e) => handleRangeChange(e, question.id)}
                className='ml-[2rem] text-white  outline-transparent'
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-pink-700 sm:px-[10px] rounded-full w-[100px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Profile;
