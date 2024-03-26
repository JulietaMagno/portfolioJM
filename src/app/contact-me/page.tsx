import ContactForm from "../components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      //style={{ backgroundImage: "url(stars.png" }}
      className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-[#2A213D] to-black"
    >
      <div
        style={{ backgroundImage: "url(universo.jpg" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl shadow-xl shadow-pink-600"
      >
        <div className="absolute bottom-20 ml-10 md:ml-20 w-[80%] md:w-[60%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;