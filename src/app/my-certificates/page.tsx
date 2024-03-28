"use client"

import CertificateCard from '../components/CertificateCard';
import { Certificates } from '../constants';
import React from 'react';

const Page = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#2A213D] to-black'>
      <div className='w-screen flex items-center justify-center overflow-y-auto mt-[90px] mb-[70px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[93%] max-h-[100%] pt-4'>
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
      </div>
    </div>
  )
}

export default Page;
