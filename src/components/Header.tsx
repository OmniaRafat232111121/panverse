import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../assets/images/logo.png'
const Header = () => {
  return (
   <header className='sticky z-20 inset-0 bg-white'>
    <Container>
      <div className='flex items-center justify-between'>
        {/*logo*/}
        <Link href="">
          <Image src={logo} alt="logo"/>
        </Link>

        {/*navigation*/}
        <ul className="flex h-full items-center duration-300 gap-x-4 sm:gap-x-8 text-16">
          <li className='relative group cursor-pointer hover:text-teal-700'>
            <div className='flex items-center gap-x-2'>
            <p>Courses</p>
            <svg
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  className="h-3 w-3 text-gray-700 group-hover:text-teal-700 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.55554L4.5 5.44443L8 1.55554"
                    stroke="black"
                    strokeWidth="2"
                  />
              </svg>


            </div>
          </li>
          <Link className="hover:text-teal-700 duration-300" href={""}>
              <li>Blogs</li>
            </Link>


            <Link className="hover:text-teal-700 duration-300" href={""}>
              <li>Videos</li>
            </Link>
        </ul>
      </div>
    </Container>

   </header>
  )
}

export default Header
