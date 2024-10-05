import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-slate-800",
    textColor="text-white",
    className="",
    ...props //...props captures any extra props not explicitly listed.
}) {
  return (
    <button className={`px-[15px] py-[8px]  rounded-lg font-[600] hover:bg-gray-800 bg-slate-700   transition-[1s] dark:bg-blue-700  ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button