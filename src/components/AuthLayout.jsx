import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default  function Protected({children,authentication=true}) {
    const authStatus=useSelector(state=>state.auth.status);
    const navigate=useNavigate();
    const [loader,setLoader]=useState(true);

    useEffect(()=>{
        // Case 1: If route requires authentication (authentication = true)
        // and user is NOT authenticated, redirect to login.
        if(authentication && !authStatus){
            navigate('/login');
        }

         // Case 2: If route does NOT require authentication (authentication = false)
         // and user IS authenticated, redirect to home ("/").
        else if(!authentication && authStatus){
            navigate('/');
        }
        setLoader(false);
    },[authStatus,navigate, authentication])


  return loader ? <h1>Loading...</h1>: <>{children}</>
}

