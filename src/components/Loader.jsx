import React from "react";
import {motion} from "framer-motion";


function Loader(){

return(

<div className="
h-screen
bg-[#020617]
flex
items-center
justify-center
">


<motion.div

animate={{

rotate:360

}}

transition={{

duration:2,
repeat:Infinity,
ease:"linear"

}}

className="
w-20
h-20
border-4
border-cyan-400
border-t-transparent
rounded-full
"

>


</motion.div>


</div>


)

}


export default Loader;