"use client"

import ProyectsCard from '../components/ProyectsCard';
import { Proyects } from '../constants';
import React from 'react';

const Page = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#2A213D] to-black pt-[100px] pb-[70px]'>
      <div className='w-screen flex items-center justify-center overflow-y-auto'>
        <div className='grid grid-cols-1 gap-6 max-w-[93%] max-h-[100%] py-2'>
          {Proyects.map((proyect, index) => (
              <ProyectsCard
                  key={index}
                  title={proyect.title}
                  text={proyect.text}
                  image={proyect.src}
                  href={proyect.href}
              />  
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;
