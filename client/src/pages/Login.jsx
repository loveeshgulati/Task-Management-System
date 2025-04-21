import React, { useEffect } from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Login = () => {
 const {user} = useSelector((state)=> state.auth);
 const{
   register,
   handleSubmit,
   formState:{errors},
   }= useForm();
 
 const Navigate = useNavigate();
 const submitHabndler = async()=>{
  console.log("submit")
 }
 
 useEffect(() => {
   user && Navigate("/dashboard");

 },[user]);

   return( <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row">
  <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
          <span className='flex gap-1 py-1 px-5 border rounded-full text md:text-base bordergray-300 text-red-600'>
            Manage your all task in one place!
</span>
 <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700'>
              <span>Cloud-Based</span>
              <span>Task Manager</span>
            </p>

        </div>
        <div className="flex flex-col gap-y-5">
          <Textbox
          placeholder="email@example.com" 
          type="email"
          name="email"
          label="Email Address"
          className="w-full rounded-full"
          register={register("email",{required: "Email Address is required!"} )}
          error={errors.email? errors.email.message : ""}

          />
          <Textbox
          placeholder="Your Password" 
          type='password'
          name='password'
          label='Password'
          className="w-full rounded-full"
          register={register("password",{required: "Password is required!"} )}
          error={errors.password? errors.password.message : ""}/>
          <span className="text-sm text-gray-500 hover:text-blue-500 hover:underline cursor-pointer">Forget Password?</span>
        <Button
        type='submit'
        label='Submit'
        className ="w-full h-10 bg-blue-700 text-white rounded-full"

        />
        </div>

      </form>


      </div>

    </div>
  </div>
  );

   
 };
 
 export default Login