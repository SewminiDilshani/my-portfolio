import React from "react";
import { FaGithub } from "react-icons/fa";


const projects = [

  {
    title: "CleanMart",
    description:
      "A modern web application developed for managing cleaning products and services.",
    github:
      "https://github.com/SewminiDilshani/CleanMart"
  },


  {
    title: "FeedForward",
    description:
      "A platform developed to manage food donation and sharing activities.",
    github:
      "https://github.com/SewminiDilshani/FeedForward"
  },


  {
    title: "FinAesthetic App",
    description:
      "A finance management application with a modern user interface.",
    github:
      "https://github.com/SewminiDilshani/FinAesthetic-App"
  },


  {
    title: "To-Do List",
    description:
      "A task management application to organize daily activities.",
    github:
      "https://github.com/SewminiDilshani/To-Do-List"
  },


  {
    title: "PickUp Organization",
    description:
      "A collaborative software project developed for pickup services.",
    github:
      "https://github.com/PickUp-Members/PickUp-Org"
  }

];



function Projects(){

return(

<section
id="projects"
className="
py-20
px-10
md:px-20
"
>


<h2
className="
text-4xl
md:text-5xl
font-bold
text-center
text-cyan-400
"
>
Projects
</h2>



<div
className="
grid
md:grid-cols-3
gap-8
mt-12
"
>


{
projects.map((project,index)=>(


<div

key={index}

className="
bg-white/5
border
border-white/10
rounded-xl
p-6
hover:border-cyan-400
transition
"

>


<h3
className="
text-2xl
font-bold
text-white
"
>
{project.title}
</h3>



<p
className="
text-gray-300
mt-4
"
>
{project.description}
</p>




<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-2
mt-6
text-cyan-400
hover:text-cyan-300
"

>

<FaGithub/>

GitHub

</a>



</div>


))

}



</div>



</section>


)

}


export default Projects;