import React from 'react'
import Container from './Container'
import Button from './Button'
import Image from 'next/image'
import Heroposter from "../assets/images/Hero poster.png"
const Hero = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col md:flex-row items-center mt-[40px]'>
          {/*left*/}
          <div className='flex-1'>
            <h4 className='text-[#00616C] text-[1.125rem] font-bold'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 lg:leading-[60px]">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p     className="mt-6 text-lg text-slate-600 max-w-xl leading-[30px]">
A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
            <p className='mt-6 text-lg text-slate-600 max-w-xl leading-[30px]'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
           <Button title="learn More"/>
          </div>
          {/*right*/}

          <div className='flex-1'>
          <Image src={Heroposter} alt="Hero Poster" />


           </div>

        </div>

      </Container>
    </section>
  )
}

export default Hero
