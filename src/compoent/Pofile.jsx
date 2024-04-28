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
    <div>
      <div className=' bg-blue-500 flex'>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" value={user?.name} readOnly />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" value={user?.email} readOnly />
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" placeholder="Gender" value={user.gender} readOnly />
          <label htmlFor="educationQualification">Education Qualification</label>
          <input type="text" id="educationQualification" placeholder="Education Qualification" value={user.educationQualification} readOnly />
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" placeholder="Bio" value={user?.bio} readOnly />
        </div>
        {/* image */}
        <div>
          <img src={user?.avatar?.url} alt="profile" className="w-32 h-32 rounded-full" />
        </div>
      </div>

      <div >
        <form onSubmit={onSubmit}>
          {
            personalityQuestions.map((question, index) => (
              <div key={index}>
                <label htmlFor={question.id}>{question.question}</label>
                <input
                  type="range"
                  id={question.id}
                  min="1"
                  max="10"
                  value={personality[question.id]}
                  onChange={(e) => handleRangeChange(e, question.id)} 
                />
              </div>
            ))
          }
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Profile;
