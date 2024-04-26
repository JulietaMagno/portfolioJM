import React from "react";
import { Socials } from '../constants'
import Image from 'next/image'
import Link from 'next/link'

const ContactForm = () => {
  return (
    <form> 
      <div className="pr-3">
      <h2 className=" text-4xl font-bold mb-5 text-white">Get in touch!</h2>
      <p className="text-lg text-gray-300 font-semibold hidden md:block">
      Thanks for have a look at my profile! If you want to know more about me or my work, feel free to contact me.
      </p>
      <p className="text-lg text-gray-300 font-semibold">
      You can reach me via email at{" "}
        <a
          href="mailto:magnojulieta.it@gmail.com"
          className="text-pink-600 hover:underline font-semibold"
        > magnojulieta.it@gmail.com</a>  
      </p>
    
        <div className='flex flex-col gap-5 mb-2 mt-10'>
            {Socials.map((social) => (
              <div key={social.name} className="flex items-center">
                <Link key={social.name} href={social.href} target="_blank">
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={28}
                      height={28}
                    />
                </Link>
                <p className="ml-2 text-gray-300">{social.text}</p> {/* Texto al lado de la imagen */}
              </div>
            ))}
          </div>
        
      </div>

      {/* <div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Your message"
            name="message"
            className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-[200px] bg-pink-600 bg-opacity-80 hover:bg-purple-600 hover:bg-opacity-80">
          Send a message
        </button>
      </div> */}
    </form>
  );
};

export default ContactForm;