import React from 'react'
import {Logo,Button, Logout} from './index.js'
import { useNavigate } from 'react-router-dom'
import ThemeBtn from './ThemeBtn.jsx'
import { useSelector } from 'react-redux'


function Header() {
    const navigate=useNavigate()
    const authStatus=useSelector((state)=>state.auth.status)
    const navItems=[
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: 'Login',
            slug: "/login",
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: "/signup",
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: "/all-post",
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: "/add-post",
            active: authStatus
        },
    ]  
  return (
    <header className="navbar w-full h-[80px] flex justify-between items-center px-[30px] shadow-md dark:bg-slate-800">
        <Logo className={'w-[70px] dark:bg-transparent'} onClick={()=>navigate("/")}/>
            <ul className="flex items-center gap-4 dark:bg-transparent">
                {navItems.map((item)=>(
                    item.active?
                    <li key={item.slug} className='mx-2 dark:bg-transparent'>
                        <button className='text-xl font-[700] text-black' onClick={()=>navigate(item.slug)} >{item.name}</button>
                    </li>:null
                ))}
                {authStatus && (
                    <li >
                        <Logout/>
                    </li>
                )}
                <ThemeBtn/>
            </ul>
    </header>
  )
}

export default Header