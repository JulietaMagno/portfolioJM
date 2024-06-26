"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { NavLinks } from '../constants';
import Link from 'next/link';
import Transitions from './Transitions';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Navigation = () => {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [ prevPath, setPrevPath ] = useState("/");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => { 
        
        if(prevPath !== path){
            setisRouting(true);
        }
     }, [path, prevPath])

    useEffect(() => {
        if(isRouting){
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [isRouting])


    return (
        <div className='fixed z-[50] bottom-0 w-full h-[64px] flex justify-center bg-pink-700 bg-opacity-20 py-5'>
            <div className='flex justify-center max-w-[400px]'>
            {isRouting && <Transitions />}
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className='pl-4 min-w-[30%]'
                >
                <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-pink-600" : "text-white" }`} />
                </Link>
            ))}
            </div>
        </div>
    )
    }
