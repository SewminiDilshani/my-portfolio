import React from "react";


const skills=[

"Java",
"JavaScript",
"React.js",
"Node.js",
"MongoDB",
"C++",
"C#",
"Tailwind CSS",
"Git & GitHub",
"Postman"

];


function Skills(){

return(

<section
id="skills"
className="
py-24
px-6
lg:px-20
"
>


<h2 className="
text-4xl
font-bold
text-center
text-cyan-400
mb-10
">

Skills

</h2>



<div className="
flex
flex-wrap
justify-center
gap-4
">


{

skills.map((skill,index)=>(

<div

key={index}

className="
px-6
py-3
rounded-xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
"

>

{skill}

</div>


))

}


</div>


</section>


)

}


export default Skills;