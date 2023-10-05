import React, { FC } from "react";

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='max-w-screen-2xl mx-auto p-4 md:px-12 mt-20'>
      {children }
    </div>
  )
}

export default Container;