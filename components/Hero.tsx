import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const Hero = () => {
  
  return (
    <div className='mb-20 pt-36'>
        <div className='overflow-x-hidden'>
            <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white'/>
            <Spotlight className='top-96 left-[59%] md:top-10 md:left-[58%] h-[80vh] w-[80vw] md:w-[50vw]' fill='white'/>
            <Spotlight className='top-28 left-72 h-[80vh] w-[50vw]' fill='white'/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      
    </div>
    <div className='flex justify-center relative my-20 z-10'>
<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
<div className="text-left">
          <TextGenerateEffect className="text-5xl md:text-6xl lg:text-8xl font-extrabold dark:text-white-200 mb-3"
          words='Muhammed'/>
          <TextGenerateEffect className="text-5xl md:text-6xl lg:text-8xl font-extrabold dark:text-white"
          words='Nizamudheen.'/>
          <p className="text-xl md:text-2xl lg:text-4xl mt-4 md:mt-6 lg:mt-8 tracking-wide text-white">Mern Stack Developer.</p>
          <Link href='#projects' className='mt-8'>
       <MagicButton word={'Show my work'} position={'left'} icon={<FaLocationArrow/>}/>
       </Link>
        </div>
</div>
    </div>
        </div>
  )
}

export default Hero