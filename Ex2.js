import { useEffect, useState } from "react";
import "./Ex2.css"

function Usestate() {
   const [value , setValue] = useState("blue");

        // useEffect(()=>{
        //     setValue("navin");
        // },[])
       return (
        <>
           <div>
            <p >Usestate  {value} </p>
            <p>
            KEEP LEARNING
Edify Your Skills With Our Tech Experts
We make a intellectual route with skilled trainers that drive your wisdom to triumph
            </p>
            <p>
            KEEP LEARNING
Edify Your Skills With Our Tech Experts
<span style={{color:value}}>Edify Your Skills With Our Tech Experts</span> 
We make a intellectual route with skilled trainers that drive your wisdom to triumph
            </p>
            <p>
            KEEP LEARNING
Edify Your Skills With Our Tech <span style={{color:value}}>{value}</span> 
 We make a intellectual route with skilled trainers that drive your wisdom to triumph
            </p>
           </div>
        </>
    )
}
export default Usestate;