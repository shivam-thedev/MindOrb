import React, { forwardRef, useId } from 'react'

const Input=forwardRef(function Input({
  label,
  type="text",
  className="",
  ...props
},ref){
  const id=useId();
  return (
    <div className='mb-4 bg-transparent'>
      {label && <label
      className='block text-lg font-semibold'
      htmlFor={id}
      >
        {label}
      </label>
      }
      <input
        type={type}
        className={`w-full p-3 outline-none rounded-lg border-2 border-slate-300 focus:border-slate-500  dark:border-none dark:text-slate-900 $className`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  )
})

export default Input