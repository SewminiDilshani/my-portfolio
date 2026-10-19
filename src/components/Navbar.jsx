import React from "react";
import {motion} from "framer-motion";

function Navbar(){

return(

<motion.nav

initial={{y:-80}}

animate={{y:0}}

className="
fixed
top-0
left-0
w-full
z-50
px-6
lg:px-20
py-5
bg-[#020617]/70
backdrop-blur-xl
border-b
border-white/10
"

>


<div className="
flex
justify-between
items-center
">


<h1 className="
text-2xl
font-black
">

SEWMINI
<span className="text-cyan-400">
.DEV
</span>

</h1>



<div className="
hidden
md:flex
gap-8
text-slate-300
">


<a 
href="#about"
className="hover:text-cyan-400 transition"
>
About
</a>


<a 
href="#skills"
className="hover:text-cyan-400 transition"
>
Skills
</a>


<a 
href="#projects"
className="hover:text-cyan-400 transition"
>
Projects
</a>


<a 
href="#contact"
className="hover:text-cyan-400 transition"
>
Contact
</a>


</div>


</div>


</motion.nav>


)

}

export default Navbar;