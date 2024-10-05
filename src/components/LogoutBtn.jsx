import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

function LogoutBtn({children}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const logoutHandler=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout());
            navigate('/');
        })
        .catch((error)=>{
            console.log("Unable to logout",error)
        })
    }
  return (
    <button className='text-xl font-[700] text-black' onClick={logoutHandler} >{children}</button>
  )
}

export default LogoutBtn