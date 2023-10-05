import React from 'react'
type Props={
  title:string,
  
}
const Button = ({title}:Props) => {
  return (
    <div className=' leading-[1.25rem] mt-5 max-w-[30%] font-semibold rounded-full px-7 py-4  bg-[#00616C] hover:shadow-lg text-white text-lg  
    z-0 hover:scale-105 duration-300 capitalize active:scale-100 cursor-pointer'>
      {title}
    </div>
  )
}

export default Button
