import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth';
import { logout } from '../store/authSlice';

function LogoutBtn() {
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout());
        })
        .catch((error)=>{
            console.log("Unable to logout",error)
        })
    }
  return (
    <button className='text-xl font-[700] text-black' onClick={logoutHandler} >Logout</button>
  )
}

export default LogoutBtn