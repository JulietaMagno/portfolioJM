import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center " style={{backgroundImage: "url(/main-bg-pink.jpg"}}>
        <div className="pl-20 pr-8 md:pl-[14%] sm:px-[10%] pb-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[1200px]">
          <h1 className="text-[50px] text-white font-semibold hidden md:block">
            Hi there! I'm Julieta Magno 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              {" "}
              Full Stack developer
            </span>
          </h1>
          <h1 className="text-[45px] text-white font-semibold md:hidden sm:block drop-shadow-2xl">
            Hi there! I'm Julieta Magno 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-2xl">
              {" "}
              Full Stack developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block pb-5" >
          I am a designer who is entering the IT world. My background is in Architecture and Urbanism, but life has led me down this new path. I am happy to start walking through this world of creation and infinite learning.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/my-skills" className="rounded-[200px] group relative bg-pink-600 bg-opacity-70 hover:bg-pink-600 hover:bg-opacity-80 shadow-xl shadow-pink-600/40 hover:shadow-pink-500/50 px-5 py-3 text-lg text-white">
              My skills
            </Link>
            <Link href="/my-certificates" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-pink-600 hover:bg-opacity-80 shadow-xl shadow-pink-600/40 hover:shadow-pink-500/50 px-5 py-3 text-lg text-white max-w-[200px] ">
              <div className="rounded-[20px] group relative z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Certificates
            </Link>
            <Link href="/my-proyects" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-pink-600 hover:bg-opacity-80 shadow-xl shadow-pink-600/40 hover:shadow-pink-500/50 px-5 py-3 text-lg text-white max-w-[200px] ">
              <div className="rounded-[20px] group relative z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Projects
            </Link>
            <Link href="/contact-me" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-pink-600 hover:bg-opacity-80 shadow-xl shadow-pink-600/40 hover:shadow-pink-500/50 px-5 py-3 text-lg text-white max-w-[200px] ">
              <div className="rounded-[20px] group relative z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Contact me
            </Link>
          </div>
        </div>
      </div>
      
      {/* mobile version */}
          <div className="absolute bottom-40 left-20 w-[280px] grid grid-cols-2 justify-items-stretch content-center gap-5 md:hidden">
          <Link href="/my-skills" className="rounded-[200px] group relative bg-pink-600 bg-opacity-70 hover:bg-pink-600 hover:bg-opacity-80 shadow-xl shadow-pink-600/40 hover:shadow-pink-500/50 px-5 py-3 text-md text-white">
              My skills
            </Link>
            <Link href="/my-certificates" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-pink-600 hover:bg-opacity-80 shadow-xl shadow-pink-600/40 hover:shadow-pink-500/50 px-5 py-3 text-md text-white max-w-[200px] ">
              <div className="rounded-[20px] group relative z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Certificates
            </Link>
            <Link href="/my-proyects" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-pink-600 hover:bg-opacity-80 shadow-xl shadow-pink-600/40 hover:shadow-pink-500/50 px-5 py-3 text-md text-white max-w-[200px] ">
              <div className="rounded-[20px] group relative z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Projects
            </Link>
            <Link href="/contact-me" className="rounded-[200px]  bg-pink-600 bg-opacity-70 hover:bg-pink-600 hover:bg-opacity-80 shadow-xl shadow-pink-600/40 hover:shadow-pink-500/50 px-5 py-3 text-md text-white max-w-[200px] ">
              <div className="rounded-[20px] group relative z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Contact
            </Link>
          </div>
    </main>
  )}
