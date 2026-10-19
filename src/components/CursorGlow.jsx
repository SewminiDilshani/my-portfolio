import React,{useEffect,useState} from "react";


function CursorGlow(){

const [position,setPosition]=useState({
x:0,
y:0
});


useEffect(()=>{


const move=(e)=>{

setPosition({

x:e.clientX,
y:e.clientY

})

}



window.addEventListener(
"mousemove",
move
);


return()=>{

window.removeEventListener(
"mousemove",
move
)

}


},[]);



return(

<div

style={{

left:position.x-150,
top:position.y-150

}}

className="
fixed
w-[300px]
h-[300px]
rounded-full
bg-cyan-400/10
blur-[100px]
pointer-events-none
z-0
transition-all
duration-300
"

>


</div>


)

}


export default CursorGlow;