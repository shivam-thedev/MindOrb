import React from 'react'
import {Logo} from './index.js'
import { useNavigate } from 'react-router-dom'
import ThemeBtn from './ThemeBtn.jsx'
import { useSelector } from 'react-redux'


function Header() {
    const navigate=useNavigate()
    const authStatus=useSelector(state=>state.auth.status)
     
  return (
    <header className="navbar w-full h-[80px] flex justify-between items-center px-[30px] shadow-md backdrop-contrast-150 dark:bg-black dark:border-b-2 dark:border-zinc-700 max-md:h-[70px] max-md:px-4 dark:border-x-0">
        <Logo className={'w-[70px] dark:bg-transparent'} onClick={()=>navigate("/")}/>
            <ul className="flex items-center gap-4 dark:bg-transparent">
                <li>
                    <div className='flex items-center p-2 bg-gray-100 rounded-lg shadow cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" onClick={()=>navigate('/')}>
                            <path fill="#1e00ff" fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </li>
                {authStatus && (
                <div className='flex items-center p-2 bg-gray-100 rounded-lg shadow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" onClick={()=>navigate('/add-post')}>
                <path fill="#1e00ff" d="M18 12c-.55 0-1 .45-1 1v5.22c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1m3.02-7H19V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98V5h-2.01c-.54 0-.98.44-.99.98v.03c0 .55.44.99.99.99H17v2.01c0 .54.44.99.99.98h.03c.54 0 .98-.44.98-.98V7h2.02c.54 0 .98-.44.98-.98v-.04c0-.54-.44-.98-.98-.98" />
                <path fill="#1e00ff" d="M14 9H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m0 3H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m0 3H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1" />
                </svg>
                </div>
                )}
        
                <div className='flex gap-3 p-2 bg-gray-800 rounded-lg shadow dark:bg-white'>
                {authStatus && (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" onClick={()=>navigate('/dashboard')}>
                    <path fill="#009dff" d="M3 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm0 8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm1-17a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                </svg>
                )}
                <ThemeBtn/>
                </div>
            </ul>
    </header>
  )
}

export default Header