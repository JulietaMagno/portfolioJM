import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center " style={{backgroundImage: "url(/main-bg-pink.jpg"}}>
        <div className="pl-20 pr-8 md:pl-[20%] pb-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[850px]">
          <h1 className="text-[50px] text-white font-semibold hidden md:block">
            Hi there! I'm Julieta Magno 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              {" "}
              Full Stack developer
            </span>
          </h1>
          <h1 className="text-[45px] text-white font-semibold md:hidden sm:block">
            Hi there! I'm Julieta Magno 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              {" "}
              Full Stack developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block pb-5" >
          I'm a designer entering the IT world. My base is the Architecture and Urban Planning, but the life push me to this way. I'm happy to start to transit this world of creation and infinite learning. 
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/my-skills" className="rounded-[200px] group relative bg-pink-600 bg-opacity-70 hover:bg-purple-600 hover:bg-opacity-70 px-5 py-3 text-lg text-white max-w-[200px] ">
              My skills
            </Link>
            <Link href="/my-certificates" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-purple-600 hover:bg-opacity-70 px-5 py-3 text-lg text-white max-w-[200px] ">
              <div className="rounded-[20px] group relative z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Certificates
            </Link>
            <Link href="/contact-me" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-purple-600 hover:bg-opacity-70 px-5 py-3 text-lg text-white max-w-[200px] ">
              <div className="rounded-[20px] group relative z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Contact me
            </Link>
          </div>
        </div>
      </div>
      
      {/* mobile version */}
          <div className="absolute bottom-40 w-full flex justify-center gap-2  bg:hidden md:hidden">
            <Link href="/my-skills" className="rounded-[200px] group relative bg-pink-600 bg-opacity-70 hover:bg-purple-600 hover:bg-opacity-70 px-5 py-3 text-sm text-white max-w-[200px] ">
              Skills
            </Link>
            <Link href="/my-certificates" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-purple-600 hover:bg-opacity-70 px-5 py-3 text-sm text-white max-w-[200px] ">
              Certificates
            </Link>
            <Link href="/contact-me" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-purple-600 hover:bg-opacity-70 px-5 py-3 text-sm text-white max-w-[200px] ">
              Contact
            </Link>
          </div>
    </main>
  )}