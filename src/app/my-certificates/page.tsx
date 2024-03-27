"use client"

import CertificateCard from '../components/CertificateCard';
import { Certificates } from '../constants';
import React from 'react';

const Page = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#2A213D] to-black'>
      <div className='w-screen flex items-center justify-center overflow-y-auto mt-[100px] mb-[75px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[90%] max-h-[100%] pt-2'>
          {Certificates.map((certificate, index) => (
              <CertificateCard
                  key={index}
                  title={certificate.title}
                  text={certificate.text}
                  image={certificate.src}
                  href={certificate.href}
              />  
          ))}
        </div>
        <div className='absolute z-[50] -bottom-1 w-full max-h-[80px] bg-pink-700 rounded-50 flex justify-center bg-opacity-20 py-10'/>
      </div>
    </div>
  )
}

export default Page;
