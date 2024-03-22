import ContactForm from "../components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(stars.png" }}
      className="w-screen h-screen bg-black bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(universo.jpg" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-2xl shadow-xl shadow-pink-600/60"
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;