import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'
import signupIcon from '../assets/signup.png'
import signupIconDark from '../assets/signup-dark.png'
import { useSelector } from 'react-redux'

function Signup() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {register,handleSubmit}=useForm()
    const themeMode = useSelector((state) => state.theme.themeMode);
    const [error,setError]=useState("")

    const create=async (data)=>{
      setError("");
      try {
        const session=await authService.signup(data);
        if(session){
          const userData=await authService.getCurrentUser();
          if(userData){
            dispatch(authLogin(userData))
          }
          navigate('/')
        }
      } catch (error) {
        setError(error.message)
      }
    }

  return (
    <div className='flex items-center justify-center dark:bg-slate-900 gap-28'>
      <form onSubmit={handleSubmit(create)} className='bg-slate-200 w-[500px]  p-10 rounded-xl dark:bg-slate-800'>
        <h2 className='mt-0 mb-4 text-3xl font-bold text-center'>Create a free account</h2>
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
        <Button className='w-full py-3 mt-3 rounded-lg dark:bg-slate-500 dark:text-white'>Sign Up</Button>
        <div className="flex items-center my-4">
          <div className="flex-grow h-[1.5px] bg-slate-300 dark:bg-slate-600"></div>
          <span className="px-3 text-lg text-slate-500">Or</span>
          <div className="flex-grow h-[1.5px] bg-slate-300 dark:bg-slate-600"></div>
        </div>
        <Button className='w-full py-3 rounded-lg dark:bg-slate-500 dark:text-white'><i className="mx-2 fa-brands fa-google"  />Sign Up with Google</Button>
        <p className='my-4 text-center text-slate-600 dark:text-slate-200'>Already have an account? <Link to='/login'><span className='font-semibold text-slate-900 decoration-solid'>Login</span></Link></p>
      </form>
      {error && <p className='mt-8 text-center text-red-600'>{error}</p>} 
      <div className="flex flex-col justify-end image">
        <img 
          src={themeMode === "light" ? signupIcon : signupIconDark} 
          className="w-[600px] "
        />
      </div>
    </div>
  )
}

export default Signup