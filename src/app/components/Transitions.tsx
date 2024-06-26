"use client";

import React from 'react'
import { animate, motion } from 'framer-motion'

const TransitionsVariants =  {
    initial: {
        y: "100%",
        height: "200%"
    },
    animate: {
        y: 0,
        height: "0%"
        },
    exit: {
        y: ["0%", "100%"],
        height: ["0%", "100%"] 
    }
}

const Transitions = () => {

  return (
    <div>
        <motion.div
        className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#2e2257]'
        variants={TransitionsVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
        />

        <motion.div
        className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#3b2b71]'
        variants={TransitionsVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.4, duration: 0.6, ease: "easeInOut"}}
        />

        <motion.div
        className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#4b3797]'
        variants={TransitionsVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.6, duration: 0.6, ease: "easeInOut"}}
        />

       
    </div>
  )
}

export default Transitions
