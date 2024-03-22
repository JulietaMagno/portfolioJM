import React from 'react'
import Image from 'next/image'
import { Socials } from '../constants'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed top-0  z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex md:flex-row gap-3 items-center'>
            <div>
            <Image 
                src='/jmprofile.jpg' 
                alt='logo' 
                width={40} 
                height={40}
                className='w-full h-full object-contain rounded-full ' 
            />
            </div>
            
             <h1 className='text-[25px] font-semibold text-white md:hidden'>
                JM
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                {" "}
                dev
                </span>
            </h1>
            <h1 className='text-[25px] font-semibold text-white hidden md:block'>
                Julieta Magno
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                {" "}
                dev
                </span>
            </h1>
        </div>
        <div className='flex flex-row gap-5 mb-2'>
            {Socials.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" >
                        <Image
                            src={social.src}
                            alt={social.name}
                            width={28}
                            height={28}
                        />
                </Link>
            ))}
        </div>

    </div>
  )
}

export default Navbar