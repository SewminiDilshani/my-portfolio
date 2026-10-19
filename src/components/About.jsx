import React from "react";
import {motion} from "framer-motion";


function About(){

return(

<section
id="about"
className="
py-24
px-6
lg:px-20
"
>


<motion.div

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

className="
max-w-4xl
mx-auto
bg-white/5
border
border-white/10
backdrop-blur-xl
rounded-3xl
p-10
"


>


<h2 className="
text-4xl
font-bold
text-cyan-400
mb-5
">

About Me

</h2>


<p className="
text-slate-300
leading-relaxed
text-lg
">


I am an Information Technology undergraduate at the 
University of Vavuniya. I am passionate about full-stack 
development, modern web technologies, database systems 
and creating user-friendly applications.


</p>


</motion.div>


</section>


)

}


export default About;