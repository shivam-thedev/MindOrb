import React, { forwardRef, useId } from 'react'

const Input=forwardRef(function Input({
  label,
  type="text",
  className="",
  ...props
},ref){
  const id=useId();
  return (
    <div className='w-full mb-4 bg-transparent'>
      {label && <label
      className='block text-lg font-semibold'
      htmlFor={id}
      >
        {label}
      </label>
      }
      <input
        type={type}
        className={`w-full p-3 outline-none rounded-lg border-2 border-gray-300 focus:border-gray-500 dark:border-none dark:text-gray-900 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  )
})

export default Input