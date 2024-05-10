import { toast } from "react-hot-toast";
import axios from "axios";
import { server } from "./config";
import { userExists } from "../reduxslice/auth";

export const signup=(updatedSignupData, navigate)=>

async(dispatch)=>{
    const toastId = toast.loading("Creating Account");
   
try {

   
      const { data } = await axios.post(
        `${server}/api/v1/user/new`,
        updatedSignupData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
         
        console.log(data.message);
        if(data.success==false){
          return toast.error(data.message);
        }
      dispatch(userExists(data.user));
      toast.success(data.message);
        navigate("/login");
   
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      
        toast.dismiss(toastId);
    }
}
 