"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { SkillData } from '../constants';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules'


const Page = () => {
  return (
    <div 
    style={{backgroundImage: "url(/fondoskills.jpg)"}}
    className='h-screen w-screen flex items-center justify-center bg-black bg-cover bg-center'
    >
      <div className='flex flex-col gap-20 max-w-[100%] text-center items-center'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='font-semibold text-[45px] text-white'>Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              {" "}
              &
              {" "}
            </span>
            Tehchnologies
          </h1>
          <p className='text-gray-400 text-[20px] p-2'>
            Every day I learn something new, here are some of the technologies I have worked with.
          </p>
        </div>
        <Swiper
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          }}
          speed={3000}
          modules={[Autoplay]}
          className='max-w-[100%]'
          >

          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              />
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page

