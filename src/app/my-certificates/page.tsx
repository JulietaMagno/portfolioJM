"use client"

import CertificateCard from '../components/CertificateCard';
import { Certificates } from '../constants';
import React from 'react';

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Certificates.map((certificate, index) => (
          <CertificateCard
              key={index}
              title={certificate.title}
              text={certificate.text}
              image={certificate.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
