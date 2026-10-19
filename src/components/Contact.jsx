import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";


function Contact() {

  return (

    <section
      id="contact"
      className="
      py-20 
      px-10 
      md:px-20
      text-center
      "
    >


      <h2 className="
      text-4xl 
      md:text-5xl 
      font-bold
      text-cyan-400
      ">
        Contact Me
      </h2>


      <p className="
      text-gray-300 
      mt-5
      max-w-2xl
      mx-auto
      ">
        Feel free to contact me for projects, collaborations,
        or any software development opportunities.
      </p>



      <div className="
      mt-10
      grid
      md:grid-cols-2
      gap-6
      max-w-3xl
      mx-auto
      ">


        <div className="
        p-6
        rounded-xl
        bg-white/5
        border
        border-white/10
        ">

          <FaEnvelope 
          className="text-cyan-400 mx-auto"
          size={30}
          />

          <h3 className="text-white mt-3 font-semibold">
            Email
          </h3>

          <p className="text-gray-300 mt-2">
            sewminidilsha2810@gmail.com
          </p>

        </div>




        <div className="
        p-6
        rounded-xl
        bg-white/5
        border
        border-white/10
        ">

          <FaPhone
          className="text-cyan-400 mx-auto"
          size={30}
          />

          <h3 className="text-white mt-3 font-semibold">
            Phone
          </h3>

          <p className="text-gray-300 mt-2">
            +94 76 717 6050
          </p>

        </div>


      </div>




      <div className="
      flex
      justify-center
      gap-6
      mt-10
      ">


        <a
        href="https://github.com/SewminiDilshani"
        target="_blank"
        rel="noreferrer"
        className="
        p-4
        rounded-full
        border
        border-white/20
        hover:border-cyan-400
        hover:text-cyan-400
        transition
        "
        >

          <FaGithub size={30}/>

        </a>




        <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="
        p-4
        rounded-full
        border
        border-white/20
        hover:border-cyan-400
        hover:text-cyan-400
        transition
        "
        >

          <FaLinkedin size={30}/>

        </a>


      </div>



    </section>

  );

}


export default Contact;