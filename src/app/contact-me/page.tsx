import ContactForm from "../components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(universo.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
    >
      <div 
        className="h-[50%] min-h-[440px] w-[80%] rounded-xl shadow-xl shadow-pink-600 bg-gradient-to-tr from-[#2A213D] to-black mt-[90px]">
        <div className="mt-20 ml-10 md:ml-20 w-[80%] md:w-[60%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;