import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeroCanvas from "./HeroCanvas";
import profile from "../assets/profile.png";


function Hero() {

  return (

    <section
      className="
      min-h-screen
      flex
      items-center
      justify-between
      px-10
      md:px-20
      pt-20
      overflow-hidden
      "
    >


      {/* Left Content */}

      <motion.div

        initial={{
          opacity:0,
          x:-50
        }}

        animate={{
          opacity:1,
          x:0
        }}

        transition={{
          duration:1
        }}

        className="max-w-xl"

      >


        <h3 className="
        text-cyan-400
        text-xl
        font-semibold
        ">
          Full Stack Developer
        </h3>



        <h1 className="
        text-5xl
        md:text-6xl
        font-bold
        mt-4
        text-white
        ">

          Hi, I'm
          <br/>
          Sewmini Dilshani

        </h1>




        <div className="
        text-2xl
        mt-5
        text-cyan-400
        font-semibold
        ">


          <TypeAnimation

            sequence={[
              "React Developer",
              2000,
              "Node.js Developer",
              2000,
              "Software Engineer",
              2000
            ]}

            repeat={Infinity}

          />


        </div>





        <p className="
        mt-6
        text-gray-300
        text-lg
        leading-relaxed
        ">

          Information Technology undergraduate passionate about
          building modern web applications, scalable backend
          systems and beautiful user interfaces.

        </p>






        <div className="
        flex
        gap-5
        mt-8
        items-center
        ">




          <a

          href="#projects"

          className="
          px-8
          py-3
          rounded-xl
          bg-cyan-500
          text-black
          font-bold
          hover:scale-105
          transition
          "

          >

            View Projects

          </a>






          <a

          href="https://github.com/SewminiDilshani"

          target="_blank"

          rel="noreferrer"

          className="
          p-3
          rounded-xl
          border
          border-white/20
          hover:border-cyan-400
          hover:text-cyan-400
          transition
          "

          >

            <FaGithub size={28}/>

          </a>






          <a

          href="https://www.linkedin.com/"

          target="_blank"

          rel="noreferrer"

          className="
          p-3
          rounded-xl
          border
          border-white/20
          hover:border-cyan-400
          hover:text-cyan-400
          transition
          "

          >

            <FaLinkedin size={28}/>

          </a>




        </div>



      </motion.div>







      {/* Right Side Profile + 3D */}


      <motion.div

className="
relative
w-[450px]
h-[450px]
hidden
md:flex
items-center
justify-center
"

>


{/* 3D Background */}

<div
className="
absolute
inset-0
"
>

<HeroCanvas />

</div>



{/* Profile Image */}

<img

src={profile}

alt="Sewmini Dilshani"

className="
relative
z-10
w-72
h-72
rounded-full
object-cover
border-4
border-cyan-400
shadow-2xl
"

/>



</motion.div>





    </section>

  );

}


export default Hero;