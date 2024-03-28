"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'

interface Props {
    image: string;
    title: string;
    text: string;
    href: string;
}

const ProyectsCard = ({ image, title, text, href}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='w-[320px] h-[210px] md:w-[600px] md:h-[380px] rounded-md cursor-pointer py-3'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`, backgroundPosition: 'top left', backgroundRepeat: 'no-repeat' }}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40 shadow-xl shadow-pink-600'/>
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    Learn more &gt;
                    </div>
            </div>
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-3'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-70 z-[-1] shadow-xl shadow-pink-600'/>
                  <div className='flex flex-col gap-6 p-2 z-[30]'>
                    <h1 className='text-white text-xl font-semibold'>{title}</h1>
                    <p className='text-gray-200 text-[12px] md:text-[15px]'>
                        {text}
                    </p>
                    <button onClick={() => window.open(href, '_blank')} className='bg-gray-300 text-black px-2 py-2 rounded-md hover:bg-white hover:z-50'>Check page</button>
                  </div>
            </div>
        </motion.div>
    </div>    
  )
}

export default ProyectsCard