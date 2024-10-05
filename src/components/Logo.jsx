import React from 'react';
import logoLight from '../assets/MindOrb.png';
import logoDark from '../assets/Mindorb-light.png'; // Make sure you have the correct path and extension
import { useSelector } from 'react-redux';

function Logo({ className, ...props }) {
  const themeMode = useSelector((state) => state.theme.themeMode);

  return (
    <div className='dark:bg-transparent'>
      <img 
        src={themeMode === "light" ? logoLight : logoDark} 
        className={`max-md:w-12 ${className} `} 
        {...props} 
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
