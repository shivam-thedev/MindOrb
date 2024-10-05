import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from './Logo'

function Signup() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {register,handleSubmit}=useForm()

    const create=async (data)=>{
      try {
        const session=await authService.createAccount(data);
        if(session){
          const userData=await authService.getCurrentUser();
          if(userData){
            dispatch(authLogin(userData))
          }
          toast.success('Login successful!');
          navigate('/')
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

  return (
      <form onSubmit={handleSubmit(create)} className='p-10 rounded-xl dark:bg-zinc-900 w-[500px] bg-white flex flex-col items-center shadow max-md:p-6'>
        <div className='inline-block p-3 mb-3 text-center bg-gray-100 rounded-full dark:bg-zinc-800'><Logo className='w-14'/></div>
        <h2 className='mb-4 text-3xl font-bold text-center max-md:text-2xl'>Create your account</h2>
        <Input 
        label="Name" 
        placeholder="Enter your name" 
        type="text"
        {...register("name",{required:true})}
        />
        <Input 
        label="Email" 
        placeholder="Enter your mail addresss" 
        type="email"
        {...register("email",{
          required:true,
          validate:{
            matchPattern:(value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address"
          }
        })}
        />
        <Input 
        label="Password" 
        placeholder="Enter password" 
        type="password"
        {...register("password",{required:true})}
        />
        <Button className='w-full h-12 py-3 mt-3 rounded-lg dark:bg-blue-600 dark:text-white'>Sign Up</Button>
        
        {/* <div className="flex items-center my-4">
          <div className="flex-grow h-[1.5px] bg-slate-300 dark:bg-slate-600"></div>
          <span className="px-3 text-lg text-slate-500">Or</span>
          <div className="flex-grow h-[1.5px] bg-slate-300 dark:bg-slate-600"></div>
        </div>
        <Button className='w-full py-3 rounded-lg dark:bg-slate-500 dark:text-white'><i className="mx-2 fa-brands fa-google"  />Sign Up with Google</Button> */}
        <p className='my-4 text-center text-gray-600 dark:text-gray-500'>Already have an account? <Link to='/login'><span className='font-semibold text-slate-900 decoration-solid'>Login</span></Link></p>
        <ToastContainer position="bottom-right" theme="dark" />
      </form>
  )
}

export default Signup